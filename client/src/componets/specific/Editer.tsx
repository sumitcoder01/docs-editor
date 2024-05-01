import { useEffect, useState } from "react"
import Quill from 'quill';
import { toolbarOptions } from "../../utils/ToolBarOptions";
import "quill/dist/quill.snow.css"
import { socket } from "../../lib/socket";
import { textChangeEvent } from "../../constants/quillEvents";
import { EmitterSource } from "quill";
import { Delta } from "quill/core";
import { loadDocument, receiveChanges, sendChanges } from "../../constants/socketEvents";

export type EditerProps = {
  documentId: string;
}

export const Editer = ({ documentId }: EditerProps) => {
  const [quill, setQuill] = useState<Quill | null>(null);

  useEffect(() => {
    const initializeQuill = () => {
      const quillInstance = new Quill('#editor', {
        modules: {
          toolbar: toolbarOptions
        },
        theme: 'snow'
      });
      quillInstance.disable();
      quillInstance.setText("Loading...")
      setQuill(quillInstance);
    };

    initializeQuill();

    return () => {
      socket.disconnect();
    }
  }, [])

  useEffect(() => {
    if (!quill) return;
    const textChangeHandlar = (delta: Delta, _oldContent: Delta, source: EmitterSource) => {
      if (source !== "user") return;
      socket.emit(sendChanges, delta);
    }
    const receiveChangeHandlar = (document: Delta) => {
      quill.setContents(document);
    }
    quill.on(textChangeEvent, textChangeHandlar)

    socket.on(receiveChanges, receiveChangeHandlar)

    return () => {
      quill.off(textChangeEvent, textChangeHandlar)
      socket.off(receiveChanges, receiveChangeHandlar)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quill])

  useEffect(() => {
    const loadDocumentHandler = (document: Delta) => {
      if (!quill) return;
      quill.setContents(document);
      quill.enable();
    }
    socket.emit(loadDocument, documentId);

    socket.once(loadDocument, loadDocumentHandler)
  }, [documentId, quill])


  return (
    <div>
      <div id="editor"></div> 
    </div>
  )
}

import { useEffect, useState } from "react"
import Quill from 'quill';
import { toolbarOptions } from "../../utils/ToolBarOptions";
import "quill/dist/quill.snow.css"
import { socket } from "../../lib/socket";
import { textChangeEvent } from "../../constants/quillEvents";
import { EmitterSource } from "quill";
import { Delta } from "quill/core";
import { getDocument, loadDocument, receiveChanges, saveDocument, sendChanges } from "../../constants/socketEvents";
import '../styles/Editer.css';
import { useAuth } from "../../context/authContext";

export type EditerProps = {
  documentId: string;
}

export const Editer = ({ documentId }: EditerProps) => {
  const [quill, setQuill] = useState<Quill | null>(null);
  const [contentChanged, setContentChanged] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState(true);
  const { user } = useAuth();

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
      socket.connect();
      socket.emit(getDocument, { documentId, authorId: user?.id });
    };
    initializeQuill();
    return () => {
      socket.disconnect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documentId])

  useEffect(() => {
    if (!quill) return;
    const textChangeHandlar = (delta: Delta, _oldContent: Delta, source: EmitterSource) => {
      if (source !== "user") return;
      socket.emit(sendChanges, delta);
      setContentChanged(prev => !prev)
    }

    const receiveChangeHandlar = (delta: Delta) => {
      setContentChanged(prev => !prev)
      quill.updateContents(delta);
    }

    const loadDocumentHandler = (document: Delta) => {
      console.log(document);
      if (!quill) return;
      quill.enable();
      quill.setContents(document);
    }

    quill.on(textChangeEvent, textChangeHandlar)

    socket.on(receiveChanges, receiveChangeHandlar);
    socket.once(loadDocument, loadDocumentHandler);
    return () => {
      quill.off(textChangeEvent, textChangeHandlar)
      socket.off(receiveChanges, receiveChangeHandlar)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quill])

  useEffect(() => {
    const intervalId = setInterval(() => {
      socket.emit(saveDocument, ({ documentId, data: quill?.getContents() }));
    }, 2000)
    return () => {
      clearInterval(intervalId);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentChanged])

  useEffect(() => {
    const handleConnectionStatus = (connected: boolean) => {
      setIsConnected(connected);
    }

    socket.on("connect", () => {
      handleConnectionStatus(true);
    });

    socket.on("disconnect", () => {
      handleConnectionStatus(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return (
      <div className='w-[60%] md:w-full md:mx-auto'>
        {!isConnected && <div className='text-red-500 my-2 text-center'>User is disconnected. Please check your internet connection.</div>}
        <div className="min-h-screen w-[60%] sm:w-[90%] md:w-[80%] bg-white shadow-md md:container editer-container" id="editor"></div>
      </div>
  )
}

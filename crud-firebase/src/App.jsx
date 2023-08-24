import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect } from "react";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import ContactCard from "./components/ContactCard";
import Model from "./components/Model";

function App() {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        console.log(contactsSnapshot);
        const contactList = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log(contactList);
        setContacts(contactList);
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-[370w] px-4">
        <Navbar />
        <div className="flex gap-2 ">
          <div className="flex relative flex-grow items-center  ">
            <FiSearch className="text-white absolute text-3xl ml-1  " />
            <input
              type="text"
              className="bg-transparent flex-grow border-white border rounded-md h-10 text-white pl-10"
            />
          </div>
          <div className="">
            <AiFillPlusCircle
              onClick={onOpen}
              className="text-5xl text-white cursor-pointer "
            />
          </div>
        </div>
        <div className="mt-4 flex-col gap-3 ">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>

      <Model isOpen={isOpen} onClose={onClose}>
        hi
      </Model>
    </>
  );
}

export default App;

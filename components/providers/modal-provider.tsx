"use client";
import { useState , useEffect} from "react";
import { EditServerModal } from "@/components/modals/edit-server-modal";
import { CreateServerModal } from "@/components/modals/create-server-modal";
import { InviteModal } from "../modals/invite-modal";
import { MembersModal } from "../modals/members-modal";

 export const ModalProvider =() =>{
    const [isMounted , setIsMounted] =useState(false);
    
    useEffect(() =>{
        setIsMounted(true);
    }, []);

    if (!isMounted){
        return null;
    }

    return(
        <>
        <CreateServerModal />
        <InviteModal />
        <EditServerModal />
        <MembersModal />
        </>
    )
 }
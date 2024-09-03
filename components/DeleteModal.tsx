"use client"

import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import Image from "next/image";
import { deleteDocument } from "@/lib/actions/room.actions";

function DeleteModal({ roomId }: DeleteModalProps) {
  const [open, setOpen] = useState(false);
  const [loading, setloading] = useState(false);

  const deleteDocumentHandler = async () => {
    setloading(true);
    try {
      await deleteDocument(roomId);
    } catch (error) {
      console.log("An error occurred while deleting the document:" + error);
    } finally {
      setloading(false);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="min-w-9 rounded-xl bg-transparent p-2 transition-all">
          <Image
            src="/assets/icons/delete.svg"
            alt="delete"
            width={20}
            height={20}
            className="mt-1"
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog">
        {/* Header */}
        <DialogHeader>
          <Image
            src="/assets/icons/delete-modal.svg"
            alt="delete"
            width={48}
            height={48}
            className="mb-4"
          />
          <DialogTitle>Delete document</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this document? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        {/* Footer */}
        <DialogFooter className="mt-5">
          {/* close button */}
          <DialogClose asChild className="w-full bg-dark-400 text-white">
            Cancel
          </DialogClose>
          {/* delete button */}
          <Button
            variant="destructive"
            onClick={deleteDocumentHandler}
            className="gradient-red w-full"
          >
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteModal;

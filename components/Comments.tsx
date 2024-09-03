// This component wraps around the Thread component to add additional logic and styles.

import { cn } from "@/lib/utils";
import { useIsThreadActive } from "@liveblocks/react-lexical";
import { Composer, Thread } from "@liveblocks/react-ui";
import { useThreads } from "@liveblocks/react/suspense";
import React from "react";
const Comments = () => {
  // get all existing comments threads
  const { threads } = useThreads();

  return (
    <div className="comments-container">
      {/* It allow you to write comments comming from liveblocks/react-ui */}
      <Composer className="comment-composer" />

      {threads.map((thread) => (
        <ThreadWrapper key={thread.id} thread={thread} />
      ))}
    </div>
  );
};

export default Comments;

const ThreadWrapper = ({ thread }: ThreadWrapperProps) => {
  //  A thread is considered active if the user is currently interacting with it.
  const isActive = useIsThreadActive(thread.id);

  return (
    // display individual comment threads
    <Thread
      thread={thread}
      data-state={isActive ? "active" : null}
      className={cn(
        "comment-thread border",
        isActive && "!border-blue-500 shadow-md",
        thread.resolved && "opacity-40"
      )}
    />
  );
};

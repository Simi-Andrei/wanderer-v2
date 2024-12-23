"use client";

import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const users = useQuery(api.users.get);
  const createUser = useMutation(api.users.create);

  const submitHandler = async (e) => {
    e.preventDefault();

    await createUser({ username, email });
    setUsername("");
    setEmail("");
  };

  if (users === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <div className="m-10">
      <div>
        <form
          onSubmit={submitHandler}
          className="max-w-xl flex flex-col gap-y-2"
        >
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Button type="submit">Add user</Button>
        </form>
      </div>
      <div className="mt-10">
        {users.map((user) => (
          <p key={user._id}>
            {user.username} - {user.email}
          </p>
        ))}
      </div>
    </div>
  );
}

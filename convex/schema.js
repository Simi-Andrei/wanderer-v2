import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
  users: defineTable({
    username: v.string(),
    email: v.string(),
    // password: v.string(),
    // profileImage: v.optional(v.string()),
    // journeys: v.optional(
    //   v.array(
    //     v.object({
    //       journeyId: v.id("journeys"),
    //       role: v.string(),
    //       memberSince: v.string(),
    //     })
    //   )
    // ),
    // friends: v.optional(v.array(v.id("users"))),
  }),
});

export default schema;

import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("users").collect();
  },
});

export const create = mutation({
  args: { username: v.string(), email: v.string() },
  handler: async (ctx, args) => {
    const newUserId = await ctx.db.insert("users", {
      username: args.username,
      email: args.email,
    });

    return newUserId;
  },
});

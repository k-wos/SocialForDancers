import { request } from "supertest";
import app from "../app";
import Post from "../models/Post";

describe("deletePost", () => {
    it("should delete a post and return a status of 204", async () => {
        // Create a mock post
        const mockPost = new Post({
            title: "Test Post",
            content: "Test Content",
            creator: "Test Creator",
        });
        await mockPost.save();

        const res = await request(app)
            .delete(`/posts/${mockPost._id}`)
            .set(
                "Authorization",
                `Bearer ${eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzA3MDY0MTI0Yzc0ZTIyY2U2YzcyNSIsImlhdCI6MTcwMTk1NDM2NX0.MJ2uLAbcGmk9DHTfcV8EqdUpsws4pYZ9m9dIfA6SwEc}`
            );

        expect(res.status).toBe(204);

        const post = await Post.findById(mockPost._id);
        expect(post).toBeNull();
    });
});

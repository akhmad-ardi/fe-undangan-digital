import { describe, expect, it } from "vitest";
import {
  Login,
  CreateInvitation,
  GetInvitations,
  GetInvitation,
  GenerateLink,
  ShareSocialMedia,
} from "../src/services/api";
import { IMAGE } from "./data_image";
import { base64ToFile } from "@/lib/utils";

describe("GetInvitation", () => {
  async function token_login() {
    const data = await Login({
      email: "john@example.com",
      password: "password123",
    });

    return data.token;
  }

  it("Test create invitation", async () => {
    const TOKEN = await token_login();
    const data = {
      id_template: "UNDANGN1",
      title: "Test",
      date: "2025-08-01",
      time: "15:10:00",
      location: "Test",
      description: "Test",
      primary_color: "Test",
      secondary_color: "Test",
      background_image: "wedding_2.jpg",
    };

    const res_data = await CreateInvitation(data, TOKEN);

    console.log(res_data);
  });

  it("Test create invitation with file", async () => {
    const TOKEN = await token_login();
    const data = {
      id_template: "UNDANGN2",
      title: "Test 1",
      date: "2025-08-01",
      time: "15:10:00",
      location: "Test1",
      description: "Test",
      primary_color: "Test",
      secondary_color: "Test",
      background_image: base64ToFile(IMAGE),
    };

    const res_data = await CreateInvitation(data, TOKEN);

    console.log(res_data);
  });

  it("should return invitations data", async () => {
    const TOKEN = await token_login();

    const data = await GetInvitations(TOKEN);

    console.log(data);
  });

  it("should return invitation data", async () => {
    const data = await GetInvitation("wJHn3vP-");

    console.log(data);
  });

  it("should return generate link data", async () => {
    const TOKEN = await token_login();

    const data = await GenerateLink({ id_invitation: "wJHn3vP-" }, TOKEN);

    console.log(data);
  });

  it("should return share social media data", async () => {
    const TOKEN = await token_login();

    const data = await ShareSocialMedia(
      { id_invitation: "wJHn3vP-", name_platform: "whatsapp" },
      TOKEN,
    );

    console.log(data);
  });
});

import { AxiosError } from "axios";
import { AxiosInstance } from "../lib/axios-instance";

export async function Register(data: {
  email: string;
  name: string;
  password: string;
  confirm_password: string;
}) {
  try {
    const res = await AxiosInstance.post("/auth/register", data);

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
}

export async function Login(data: { email: string; password: string }) {
  try {
    const res = await AxiosInstance.post("/auth/login", data);

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
}

export async function CheckAuth(token: string) {
  try {
    const res = await AxiosInstance.get("/auth", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
}

export async function CreateInvitation(
  data: {
    id_template: string;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    primary_color: string;
    secondary_color: string;
    background_image: File | string;
  },
  token: string,
) {
  try {
    const formData = new FormData();
    formData.append("id_template", data.id_template);
    formData.append("title", data.title);
    formData.append("date", data.date);
    formData.append("date", data.date);
    formData.append("time", data.time);
    formData.append("location", data.location);
    formData.append("description", data.description);
    formData.append("primary_color", data.primary_color);
    formData.append("secondary_color", data.secondary_color);
    formData.append("background_image", data.background_image);

    const res = await AxiosInstance.post("/invitation/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
}

export async function GetInvitations(token: string) {
  try {
    const res = await AxiosInstance.get("/invitation", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data as { invitations: [] };
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
}

export async function GetInvitation(id_invitation: string) {
  try {
    const res = await AxiosInstance.get(`/invitation/${id_invitation}`);

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
}

export async function GenerateLink(
  data: { id_invitation: string },
  token: string,
) {
  try {
    const res = await AxiosInstance.post("/invitation/generate_link", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
}

export async function ShareSocialMedia(
  data: { id_invitation: string; name_platform: string },
  token: string,
) {
  try {
    const res = await AxiosInstance.post(
      "/invitation/share_social_media",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
}

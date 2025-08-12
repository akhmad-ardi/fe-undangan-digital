import { AxiosError } from "axios";
import { AxiosInstance } from "../lib/axios-instance";
import { GetInvitationInterface } from "@/lib/utils";

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
      console.log(error.response?.data);
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

export async function GetTemplates(token: string) {
  try {
    const res = await AxiosInstance.get("/invitation/templates", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data as { templates: [] };
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
}

export async function CreateInvitation(
  data: {
    id_template: string;
    name: string;
    background_image: string;
    data_invitation: any;
  },
  token: string,
) {
  try {
    const res = await AxiosInstance.post(
      "/invitation/create_invitation",
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

export async function AddDataInvitation(
  id_invitation: string,
  data_invitation: any,
  token: string,
) {
  try {
    const res = await AxiosInstance.post(
      `/invitation/add_data_invitation/${id_invitation}`,
      { data_invitation },
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

export async function AddBackgroundImage(
  id_invitation: string,
  form_data: FormData,
  token: string,
) {
  try {
    const res = await AxiosInstance.post(
      `/invitation/add_background_image/${id_invitation}`,
      form_data,
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

    return res.data.invitation as GetInvitationInterface;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
}

export async function DeleteInvitation(id_invitation: string, token: string) {
  try {
    const res = await AxiosInstance.delete(
      `/invitation/delete_invitation/${id_invitation}`,
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

export async function GuestView(data: {
  id_invitation_link: string;
  ip_address: string;
  user_agent: string;
}) {
  try {
    const res = await AxiosInstance.post("/invitation/guest_view", data);

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

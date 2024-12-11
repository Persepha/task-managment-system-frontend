// export const API_URL = process.env.APP_API_URL;
export const API_URL = "http://127.0.0.1:8000/";
export const TASKS_URL = API_URL + "tasks/";
export const CREATE_TASK_URL = TASKS_URL + "create/";

export const AUTH_URL = API_URL + "api/v1/";

export const SIGN_UP_URL = AUTH_URL + "registration/";

export const SIGN_IN_URL = AUTH_URL + "auth/login/";
export const LOGOUT_URL = AUTH_URL + "auth/logout/";

export const USER_URL = AUTH_URL + "auth/user/";

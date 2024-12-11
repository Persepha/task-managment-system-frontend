export interface SignInFormDto {
    username: string;
    password: string;
}

export interface SignUpFormDto {
    username: string;
    email: string;
    password1: string;
    password2: string;
}

interface SignInUserDto {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
}

export interface SignInResponseDto {
    access: string;
    refresh: string;
    user: SignInUserDto;
}

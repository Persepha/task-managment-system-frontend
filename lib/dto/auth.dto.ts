export interface SignInFormDto {
    username: string;
    password: string;
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

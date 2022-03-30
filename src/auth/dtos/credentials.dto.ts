import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CredentialsDTO{
    @IsString()
    @MinLength(3)
    @MaxLength(25)
    username: string;

    @IsString()
    @MinLength(8)
    @MaxLength(25)
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, 
    {message: "A senha precisa ter pelo menos 8 caractéres, sendo 1 caractér especial, 1 maiúsculo, 1 minúsculo e 1 número"})
    password: string;
}
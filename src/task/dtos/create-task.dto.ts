import { IsNotEmpty } from "class-validator";

export class CreatetaskDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    Estatura: number;

    @IsNotEmpty()
    Peso: number;

    @IsNotEmpty()
    Idade: number;

    @IsNotEmpty()
    Ombros: number;

    @IsNotEmpty()
    AntebraçoE: number;

    @IsNotEmpty()
    AntebraçoD: number;

    @IsNotEmpty()
    BraçoE: number;

    @IsNotEmpty()
    BraçoD: number;

    @IsNotEmpty()
    Toráx: number;

    @IsNotEmpty()
    Cintura: number;

    @IsNotEmpty()
    Abdomen: number;

    @IsNotEmpty()
    Quadril: number;

    @IsNotEmpty()
    CoxaE: number;

    @IsNotEmpty()
    CoxaD: number;

    @IsNotEmpty()
    PanturrilhaE: number;
    
    @IsNotEmpty()
    PanturrilhaD: number;
}
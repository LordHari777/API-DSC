import { User } from "src/auth/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    Estatura: number;

    @Column()
    Peso: number;

    @Column()
    Idade: number;

    @Column()
    Ombros: number;

    @Column()
    AntebraçoE: number;

    @Column()
    AntebraçoD: number;

    @Column()
    BraçoE: number;

    @Column()
    BraçoD: number;

    @Column()
    Toráx: number;

    @Column()
    Cintura: number;

    @Column()
    Abdomen: number;

    @Column()
    Quadril: number;

    @Column()
    CoxaE: number;

    @Column()
    CoxaD: number;

    @Column()
    PanturrilhaE: number;

    @Column()
    PanturrilhaD: number;

    @ManyToOne(type => User, user => user.tasks, {eager: false})
    user: User;
    
    @Column({nullable: true})
    finishedAt: Date;
}
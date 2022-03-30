import { NotFoundException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreatetaskDTO } from "./dtos/create-task.dto";
import { UpdatetaskDTO } from "./dtos/update-task.dto copy";
import { Task } from "./task.entity";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task>{


    getAllTasks(){
        return this.createQueryBuilder('medidas').getMany();
    }
    
    getTaskById(id){
        return this.findOne(id);
        }
       
    createTask(createTaskDTO : CreatetaskDTO){
        const {name, Estatura, Peso, Idade, Ombros, AntebraçoE,
            AntebraçoD, BraçoE, BraçoD, Toráx, Cintura, Abdomen,
            Quadril, CoxaE, CoxaD, PanturrilhaE, PanturrilhaD} = createTaskDTO;
            
        let task = this.create({
            name, Estatura, Peso,

            Idade,Ombros, AntebraçoE,

            AntebraçoD, BraçoE, BraçoD, 

            Toráx, Cintura, Abdomen, 

            Quadril, CoxaE, CoxaD,

            PanturrilhaE, PanturrilhaD
        })
        return this.save(task)
    }
    
    async updateTask(id, UpdatetaskDTO : UpdatetaskDTO){
        const {name, Estatura, Peso, Idade, Ombros, AntebraçoE,
            AntebraçoD, BraçoE, BraçoD, Toráx, Cintura, Abdomen,
            Quadril, CoxaE, CoxaD, PanturrilhaE, PanturrilhaD} = UpdatetaskDTO;

        const task = await this.getTaskById(id);

        if(!task)
            throw new NotFoundException();

        task.name = name; task.Estatura = Estatura; task.Peso = Peso;
        task.Idade = Idade; task.Ombros = Ombros; task.AntebraçoE = AntebraçoE;
        task.AntebraçoD = AntebraçoD; task.BraçoE = BraçoE; task.BraçoD = BraçoD;
        task.Toráx = Toráx; task.Cintura = Cintura; task.Abdomen = Abdomen;
        task.Quadril = Quadril; task.CoxaE = CoxaE; task.CoxaD = CoxaD;
        task.PanturrilhaE = PanturrilhaE; task.PanturrilhaD = PanturrilhaD;

        return this.save(task);
        }

    deleteTask(id){
        return this.delete(id);
    }


}
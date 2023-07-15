import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {

    // identifier
    @PrimaryGeneratedColumn({
        type: 'integer',
        name: 'user_id'
    }) user_id: number;

    // full name
    @Column({
        type: 'varchar',
        name: 'full_name',
        nullable: false
    }) full_name: string;

    // password
    @Column({
        type: 'varchar',
        name: 'password',
        nullable: false
    }) password: string;

    // email
    @Column({
        type: 'varchar',
        name: 'email',
        unique: true
    }) email: string;

    // created at
    @Column({
        type: 'timestamp',
        name: 'created_at',
        default: () => 'CURRENT_TIMESTAMP'
    }) created_at: string;
}
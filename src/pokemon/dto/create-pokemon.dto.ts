import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsInt({ message: 'El número del Pokemon debe ser un entero' })
  @IsPositive({ message: 'El número del Pokemon debe ser positivo' })
  @Min(1, { message: 'El número del Pokemon debe ser mayor a 0' })
  readonly no: number;

  @IsString({ message: 'El nombre del Pokemon debe ser un String' })
  @MinLength(1, {
    message: 'El nombre del Pokemon debe tener al menos 1 caracter',
  })
  name: string;
}

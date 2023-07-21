import { CreateCategoriaInput } from "../models/categoria";
import { CreateLivroInput } from "../models/livro";

export function validateFieldsLivro(fields: CreateLivroInput ) : string {
    switch (true) {
        case fields.nome == "" || fields.nome == null || fields.nome == undefined:
            return "nome";
        case fields.img_url == "" || fields.img_url == null || fields.img_url == undefined:
            return "img_url";
        case fields.short_description == "" || fields.short_description == null || fields.short_description == undefined:
            return "description";
        case fields.ano_lancamento.toString().length != 4 || fields.ano_lancamento == null || fields.ano_lancamento == undefined:
            return "ano_lancamento";
        case fields.autoresObjectId.length == 0 || fields.autoresObjectId == null || fields.autoresObjectId == undefined:
            return "autores";
        case fields.categoriasObjectId.length == 0 || fields.categoriasObjectId == null || fields.categoriasObjectId == undefined:
            return "categorias";
        default:
            return "";
    }
    
}
export function validateFieldsCategoria(fields: CreateCategoriaInput): string {
    if (fields.nome == "" || fields.nome == null || fields.nome == undefined) {
        return "nome"
    } else {
        return ""
    }
}
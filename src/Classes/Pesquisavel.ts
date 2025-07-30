import { IPesquisavel } from "../Interfaces/IPesquisavel";

export class PesquisavelService {
  static buscarItens<T extends IPesquisavel>(itens: T[], criterio: string): T[] {
    if (!criterio || criterio.trim() === '') {
      return itens;
    }
    const lowerCaseCriterio = criterio.toLowerCase().trim();
    return itens.filter(item => item.pesquisarPorCriterio(lowerCaseCriterio));
  }
}
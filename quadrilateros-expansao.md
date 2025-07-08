# 🟩 Expansão dos Cálculos para Quadriláteros no App

## 🔷 1. Classificação de Quadriláteros

Entre os **quadriláteros notáveis**, temos:

| Tipo             | Lados iguais? | Ângulos iguais? | Diagonais conhecidas? | Área conhecida? |
|------------------|---------------|------------------|------------------------|-----------------|
| Quadrado         | Sim           | Sim              | Sim                    | Sim             |
| Retângulo        | Lados opostos | Sim              | Sim                    | Sim             |
| Losango          | Sim           | Não              | Sim                    | Sim             |
| Trapézio         | 2 paralelos   | Não              | Parcialmente           | Sim             |
| Paralelogramo    | Lados opostos | Não              | Sim                    | Sim             |
| Deltoide (ou papagaio) | 2 pares de lados adjacentes | Não | Sim | Sim |
| Irregular        | Não           | Não              | Não                    | Difícil         |

---

## 🔧 2. Alterações Necessárias no Código

### 🟡 a) Interface (HTML/JS)
Troque a opção genérica "Quadrilátero" por um submenu com os tipos específicos:

```html
<option value="paralelogramo">Paralelogramo</option>
<option value="deltoide">Deltoide (papagaio)</option>
<option value="quadrilatero-irregular">Quadrilátero Irregular</option>

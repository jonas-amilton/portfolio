import React from "react";
import "../Experience/style.css";

function Experience() {
  return (
    <>
      <div className="container-xp">
        <div className="description-xp">
          <h2>Experiência</h2>
          <div className="xp-list">Marca RS Technology</div>
        </div>
        <div className="container-description-xp">
          <div className="description-xp">
            <h3>Desenvolvedor front end</h3>
            <p>
              São Leopoldo, RS <br /> Jan 2023 - Abril 2023
            </p>
          </div>
          <p>
            Fui estágiario durante 3 meses na Marca RS Technology, onde pude
            desenvolver interfaces, layouts, formulários e telas para sistemas
            da empresa. Realizei manutenção e refatoração de componentes já
            existentes com o framework interno da empresa para garantir que o
            código fosse mantido de acordo com as melhores práticas, padrões de
            qualidade e eficiência do código legado. Prestei suporte aos
            clientes interagia diretamente com os clientes para resolver
            problemas técnicos e fornecer ajuda para usar os sistemas, para
            garantir que os clientes pudessem utilizar as funcionalidades do
            sistema de maneira eficaz. Realizei instalação e manutenção de
            software dos sistemas da empresa. Isso incluiu a aplicação de
            atualizações de software, correção de bugs e a implementação de
            políticas de segurança. Trabalhei com outros membros da equipe para
            garantir que os sistemas da empresa estivessem sempre em pleno
            funcionamento.
          </p>
        </div>
      </div>
    </>
  );
}

export default Experience;

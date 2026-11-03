import "./acquisition.css";
export function ConditionsPage() {
  return (
    <article className="acq-conditions">
      <h1>Condições comerciais da oferta</h1>
      <p>
        Versão de 3 de novembro de 2026. O resumo apresentado antes do pagamento
        identifica o plano, valor mensal, capacidade e módulos escolhidos.
      </p>
      <h2>Assinatura mensal</h2>
      <p>
        Conectar, Cuidar e Gestão são contratados por organização, com cobrança
        mensal recorrente no cartão pelo checkout hospedado no Asaas. Não há
        teste gratuito nos planos Cuidar e Gestão. A ativação paga depende da
        confirmação financeira do provedor. Enterprise e serviços específicos
        exigem proposta.
      </p>
      <h2>Teste assistido do Conectar</h2>
      <p>
        O teste é exclusivo do Conectar, com uma unidade e até 300 membros, por
        14 dias. Não exige cartão e não gera cobrança automática. A solicitação
        depende de aprovação e preparação pela equipe. O prazo começa após o
        ambiente estar pronto e a confirmação de início pelo responsável. Ao
        terminar, a operação fica suspensa até contratar; a conversão preserva
        os dados no mesmo ambiente.
      </p>
      <h2>Unidades e módulos</h2>
      <p>
        Conectar e Cuidar incluem uma unidade; Gestão inclui até cinco, contando
        a sede. Membros ativos são contabilizados na organização, sem cota fixa
        por unidade. Alterações no catálogo não reescrevem a oferta já
        contratada. A troca para um plano com menos módulos deve ser conferida
        antes de confirmar.
      </p>
      <h2>Preparação e serviços</h2>
      <p>
        Configuração assistida, importação realizada pela equipe, treinamento
        adicional e acompanhamento seguem o escopo combinado. A assinatura não
        representa contratação automática de serviços adicionais de implantação.
      </p>
      <h2>Seus dados e seu acesso</h2>
      <p>
        Nome, contato e dados da igreja são utilizados para verificar o
        responsável, atender a solicitação, preparar o ambiente e realizar a
        cobrança escolhida. A senha é gerenciada pelo Cognito e os dados de
        cartão são informados somente ao Asaas. Não compartilhe sua senha com
        nossa equipe.
      </p>
      <h2>Atendimento e cancelamento</h2>
      <p>
        Para dúvidas sobre a oferta, cancelamento da assinatura, exportação ou
        tratamento dos dados do ambiente, utilize o atendimento oficial pelo
        WhatsApp (48) 99107-9478. O teste não é convertido em assinatura sem uma
        contratação expressa.
      </p>
      <a className="acq-link" href="/planos">
        Voltar aos planos →
      </a>
    </article>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Upload, Bot, User, Mail, Clock, Shield } from 'lucide-react'

export default function ComoFunciona() {
  const steps = [
    {
      icon: Upload,
      title: "1. Submissão",
      description: "Envie texto, link, imagem ou vídeo que deseja verificar através do formulário"
    },
    {
      icon: Bot,
      title: "2. Pré-análise IA",
      description: "Nossa inteligência artificial faz uma análise preliminar do conteúdo"
    },
    {
      icon: User,
      title: "3. Validação Humana",
      description: "Analistas especializados do TRE validam e complementam a análise"
    },
    {
      icon: Mail,
      title: "4. Resultado",
      description: "Você recebe o resultado oficial por e-mail em até 3 dias úteis"
    }
  ]

  const classifications = [
    {
      type: "Confirmado",
      color: "text-verified border-verified",
      description: "Informação verificada como verdadeira"
    },
    {
      type: "Não Confirmado",
      color: "text-denied border-denied",
      description: "Informação verificada como falsa ou enganosa"
    },
    {
      type: "Inconclusivo",
      color: "text-inconclusive border-inconclusive",
      description: "Não foi possível confirmar ou negar a informação"
    }
  ]

  return (
    <section id="como-funciona" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Funciona o Portal
            </h2>
            <p className="text-lg text-gray-600">
              Processo transparente e confiável de verificação de conteúdos políticos
            </p>
          </div>

          {/* Processo de Verificação */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{step.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Tipos de Classificação */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Tipos de Classificação
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {classifications.map((item, index) => (
                <Card key={index} className={`border-2 ${item.color}`}>
                  <CardHeader>
                    <CardTitle className={item.color}>{item.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Garantias */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-900">
                <Shield className="h-6 w-6 mr-2" />
                Nossas Garantias
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-800">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">Prazo Garantido</p>
                    <p className="text-sm">Resposta em até 3 dias úteis</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-5 w-5 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">Análise Oficial</p>
                    <p className="text-sm">Validação por especialistas do TRE</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="h-5 w-5 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">Transparência</p>
                    <p className="text-sm">Processo claro e documentado</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">Comunicação Oficial</p>
                    <p className="text-sm">Resultado por e-mail institucional</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


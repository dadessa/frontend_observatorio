import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Search, Link, AlertCircle, CheckCircle, Upload, Image, Video } from 'lucide-react'
import { useState } from 'react'

export default function HeroSection() {
  const [textContent, setTextContent] = useState('')
  const [linkContent, setLinkContent] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [videoFile, setVideoFile] = useState(null)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (type) => {
    // Simular envio
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith('image/')) {
      setImageFile(file)
    }
  }

  const handleVideoChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith('video/')) {
      setVideoFile(file)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Verifique a Veracidade de Conteúdos Políticos
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Portal oficial do TRE para combater a desinformação. 
            Submeta textos, links, imagens e vídeos para análise por nossa equipe especializada.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center text-green-600">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Análise oficial do TRE</span>
            </div>
            <div className="flex items-center text-green-600">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Resposta em até 3 dias úteis</span>
            </div>
            <div className="flex items-center text-green-600">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Resultado por e-mail</span>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="h-6 w-6 mr-2" />
                Submeter Conteúdo para Verificação
              </CardTitle>
              <CardDescription>
                Escolha o tipo de conteúdo que deseja verificar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="texto" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="texto">Texto</TabsTrigger>
                  <TabsTrigger value="link">Link</TabsTrigger>
                  <TabsTrigger value="imagem">Imagem</TabsTrigger>
                  <TabsTrigger value="video">Vídeo</TabsTrigger>
                </TabsList>
                
                <TabsContent value="texto" className="space-y-4">
                  <div>
                    <Label htmlFor="texto">Conteúdo a ser verificado</Label>
                    <Textarea
                      id="texto"
                      placeholder="Cole aqui o texto que deseja verificar..."
                      value={textContent}
                      onChange={(e) => setTextContent(e.target.value)}
                      className="min-h-32"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email-texto">Seu e-mail</Label>
                    <Input
                      id="email-texto"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <Button 
                    onClick={() => handleSubmit('texto')} 
                    className="w-full"
                    disabled={!textContent || !email}
                  >
                    Verificar Texto
                  </Button>
                </TabsContent>
                
                <TabsContent value="link" className="space-y-4">
                  <div>
                    <Label htmlFor="link">URL do conteúdo</Label>
                    <Input
                      id="link"
                      type="url"
                      placeholder="https://exemplo.com/noticia"
                      value={linkContent}
                      onChange={(e) => setLinkContent(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email-link">Seu e-mail</Label>
                    <Input
                      id="email-link"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <Button 
                    onClick={() => handleSubmit('link')} 
                    className="w-full"
                    disabled={!linkContent || !email}
                  >
                    <Link className="h-4 w-4 mr-2" />
                    Verificar Link
                  </Button>
                </TabsContent>
                
                <TabsContent value="imagem" className="space-y-4">
                  <div>
                    <Label htmlFor="imagem">Imagem para verificação</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <input
                        id="imagem"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                      <label htmlFor="imagem" className="cursor-pointer">
                        <Image className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                        <p className="text-gray-600">
                          {imageFile ? imageFile.name : 'Clique para selecionar uma imagem'}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          Formatos aceitos: JPG, PNG, GIF (máx. 10MB)
                        </p>
                      </label>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email-imagem">Seu e-mail</Label>
                    <Input
                      id="email-imagem"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <Button 
                    onClick={() => handleSubmit('imagem')} 
                    className="w-full"
                    disabled={!imageFile || !email}
                  >
                    <Image className="h-4 w-4 mr-2" />
                    Verificar Imagem
                  </Button>
                </TabsContent>
                
                <TabsContent value="video" className="space-y-4">
                  <div>
                    <Label htmlFor="video">Vídeo para verificação</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <input
                        id="video"
                        type="file"
                        accept="video/*"
                        onChange={handleVideoChange}
                        className="hidden"
                      />
                      <label htmlFor="video" className="cursor-pointer">
                        <Video className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                        <p className="text-gray-600">
                          {videoFile ? videoFile.name : 'Clique para selecionar um vídeo'}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          Formatos aceitos: MP4, AVI, MOV (máx. 100MB)
                        </p>
                      </label>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email-video">Seu e-mail</Label>
                    <Input
                      id="email-video"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <Button 
                    onClick={() => handleSubmit('video')} 
                    className="w-full"
                    disabled={!videoFile || !email}
                  >
                    <Video className="h-4 w-4 mr-2" />
                    Verificar Vídeo
                  </Button>
                </TabsContent>
              </Tabs>

              {isSubmitted && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center text-green-800">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="font-medium">Conteúdo enviado com sucesso!</span>
                  </div>
                  <p className="text-green-700 mt-1">
                    Você receberá o resultado da verificação em seu e-mail em até 3 dias úteis.
                  </p>
                </div>
              )}

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <div className="text-blue-800">
                    <p className="font-medium">Importante:</p>
                    <ul className="text-sm mt-1 space-y-1">
                      <li>• Máximo de 5 submissões simultâneas por usuário</li>
                      <li>• Apenas conteúdos relacionados ao processo eleitoral</li>
                      <li>• Imagens: máx. 10MB (JPG, PNG, GIF)</li>
                      <li>• Vídeos: máx. 100MB (MP4, AVI, MOV)</li>
                      <li>• Resultado será enviado por e-mail oficial do TRE</li>
                    </ul>
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


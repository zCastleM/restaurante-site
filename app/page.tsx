
'use client'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import * as React from "react"
import { Navbar } from "@/components/component/navbar"
import Template from "./template"
import Image from "next/image"

export default function Component() {

  return (
    <>                       <main key="1"> 
  <Navbar />
  
    <Template><section>  
      <Image
        alt="Interior do restaurante"
        className="w-full h-auto object-cover"
        height="600"
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        style={{
          aspectRatio: "768/600",
          objectFit: "cover",
        }}
        width="768"
      />
    </section></Template>
    <Template>  <section className="container mx-auto px-6 py-12" id="sobre">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">cardápio</h2>
          <p className="text-gray-600 mb-4">
            Uma gastronomia que sugere pratos da cozinha contemporânea com sabores especiais que vão te surpreender!
          </p>
          <Button>conheça nosso cardápio</Button>
        </div>
        <Image
          alt="Pratos do cardápio"
          className="w-full h-auto object-cover rounded-lg"
          height="300"
          src="https://images.unsplash.com/photo-1551489186-c892fa1428c9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{
            aspectRatio: "350/300",
            objectFit: "cover",
          }}
          width="350"
        />
      </div>
    </section></Template>
    <Template> <section className="bg-gray-100 py-12" id="destaques">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">descubra nossos destaques</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              alt="Pratos Tradicionais"
              className="w-full h-auto object-cover rounded-lg mb-4"
              height="200"
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{
                aspectRatio: "350/200",
                objectFit: "cover",
              }}
              width="350"
            />
            <h3 className="text-xl font-bold mb-2">Pratos Tradicionais</h3>
            <p className="text-gray-600 mb-4">
              Descubra a autêntica culinária local em nosso restaurante. Nossos pratos tradicionais são preparados
              com ingredientes frescos e receitas passadas de geração em geração.
            </p>
            <Button>Saiba mais</Button>
          </div>
          <div>
            <Image
              alt="Eventos Especiais"
              className="w-full h-auto object-cover rounded-lg mb-4"
              height="200"
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{
                aspectRatio: "350/200",
                objectFit: "cover",
              }}
              width="350"
            />
            <h3 className="text-xl font-bold mb-2">Eventos Especiais</h3>
            <p className="text-gray-600 mb-4">
              Realizamos eventos especiais e temáticos regularmente. Siga-nos nas redes sociais para ficar por
              dentro das últimas novidades e eventos.
            </p>
            <Button>Saiba mais</Button>
          </div>
          <div>
            <Image
              alt="Ambiente Aconchegante"
              className="w-full h-auto object-cover rounded-lg mb-4"
              height="200"
              src="https://images.unsplash.com/photo-1700426484446-5b512a1912f1?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{
                aspectRatio: "350/200",
                objectFit: "cover",
              }}
              width="350"
            />
            <h3 className="text-xl font-bold mb-2">Ambiente Aconchegante</h3>
            <p className="text-gray-600 mb-4">
              Nosso restaurante oferece um ambiente acolhedor e amigável, perfeito para refeições em família,
              encontros românticos ou reuniões de negócios.
            </p>
            <Button>Saiba mais</Button>
          </div>
        </div>
      </div>
    </section></Template>
    <section className="py-12" id="depoimentos">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">o que nossos clientes estão dizendo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 mb-4">
              A comida é simplesmente incrível e o serviço é excelente. O ambiente é aconchegante e acolhedor. Mal
              posso esperar para voltar!
            </p>
            <div className="flex items-center">
              <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1702611120121-e03dafc14150?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </Avatar>
              <div className="ml-4">
                <p className="text-sm font-semibold">João Silva</p>
                <p className="text-xs text-gray-500">Há 01 mês</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 mb-4">
              Melhor restaurante da cidade! A equipe é amigável e a comida é sempre deliciosa. Altamente
              recomendado.
            </p>
            <div className="flex items-center">
            <Avatar>
              <AvatarImage src="https://source.unsplash.com/random" />
              </Avatar>                  <div className="ml-4">
                <p className="text-sm font-semibold">Maria Carolina</p>
                <p className="text-xs text-gray-500">Há 02 meses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-black text-white py-12" id="contato">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">endereço</h3>
            <p>
              Av. Das Zona Sul, 1200
              <br />
              Ibura - São Paulo SP
            </p>
            <Button>abrir no mapa</Button>
          </div>
          <div className="text-center	">
            <h3 className="text-xl font-bold mb-4">atendimento</h3>
            <p>
              Segunda a sexta:
              <br />
              12h às 00h
            </p>
            <p>
              Sábados, domingos e feriados:
              <br />
              12h às 00h
            </p>
            <Button>abrir no mapa</Button>
          </div>
          <div className="text-center	">
            <h3 className="text-xl font-bold mb-4">contato</h3>
            <p>
              Tel.: (11) 5091-2339
              <br />
              WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
    <footer className="bg-[#343a40] text-white py-6">
    <div className="container mx-auto px-6 text-center">
      <p>© 2023 restaurante.site. Todos os direitos reservados.</p>
    </div>
  </footer>
  </main>
  </>


  )
}


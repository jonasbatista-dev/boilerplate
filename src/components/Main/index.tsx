import React from 'react';
import * as S from './styles'

const Main: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Logo src="logo.svg" alt="Imagem de um átomo e React Avançado escrito ao lado" />
      <S.Title>React Avançado</S.Title>
      <S.Description>Typescript, ReactJS, NextJS e Styled Components</S.Description>
      <S.Ilustration src="hero-illustration.svg" alt="Um desenvolvedor cde frente para uma tela com código" />
    </S.Wrapper>
  )
};

export default Main

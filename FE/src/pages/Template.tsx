import React, { useEffect } from 'react'
import { useQueryClient } from 'react-query';
import { useLocation } from 'react-router-dom'
import { TemplateType } from '../components/TemplateCardWrap/TemplateCardWrap';
import styled from 'styled-components';
import TitleEditable from '../components/TitleEditable/TitleEditable';
import { useTitleContext } from '../hooks/useTitleContext';
import TaskListBox from '../components/TaskListBox/TaskListBox';

const Template = () => {
  const location = useLocation();
  const queryClient = useQueryClient();
  const {columns, title, _id}: TemplateType = location.state;
  const { setCurrentTitle } = useTitleContext()

  useEffect(() => {
    setCurrentTitle(title)
  }, [_id])

  return (
    <TemplateContainer>
      <TitleEditable id={_id} title={title} table={"template"}/>
      <TaskListBox columns={columns}/>
    </TemplateContainer>
  )
}

export default Template


const TemplateContainer = styled.div`
    max-width: 100%;
    height: 100%;
`;
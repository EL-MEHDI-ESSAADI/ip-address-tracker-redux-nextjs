import React, { useState } from 'react'
import styled from 'styled-components'
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

type SearchInputProps = {
   className: string
}

// styles
const Button = styled.button`
   display: grid;
   align-content: center;
   justify-content: center;
   padding-inline: 1rem;
   border-radius: 0 var(--border-radius) var(--border-radius) 0;
   color: var(--cl-white);
   background-color: var(--cl-secondary);
`

const Input = styled.input`
   width: 17rem;
   height: 2.7rem;
   padding: .4rem 1.2rem;
   border: none;
   outline: none;
   border-radius: var(--border-radius) 0 0 var(--border-radius);
   font-size: 18px;
   color: var(--cl-secondary);
   background-color: var(--cl-primary);

   @media (min-width: 468px) {
   width: 20rem;
   }
   @media (min-width: 768px) {
   width: 26rem;
   }

`

const Form = styled.form`
   --border-radius: .8rem;
   display: flex;
`
// components
function SearchInput({ className }: SearchInputProps) {
   const [ip, setIp] = useState("")

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setIp(e.target.value)
   }
   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
   }

   return (
      <Form onSubmit={handleSubmit} className={className}>
         <Input value={ip} onChange={handleChange} />
         <Button aria-label='search'>
            <MdOutlineKeyboardArrowRight size="1.5rem" />
         </Button>
      </Form>

   )
}

export default SearchInput
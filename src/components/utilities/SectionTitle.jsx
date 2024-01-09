import React from 'react'

const SectionTitle = ({ sectionHeaders }) => {
    const { title, content } = sectionHeaders;

    return (
    <div className="sectionHeader">
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
  )
}

export default SectionTitle
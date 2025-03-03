const renderRoot = (root, state) => {
    const cloneComponent = root => {
      return root.cloneNode(true)
    }
  
    return renderWrapper(cloneComponent)(root, state)
  }

export {renderRoot}
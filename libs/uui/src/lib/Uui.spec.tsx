import { render } from '@testing-library/react'

import Uui from './Uui'

describe('Uui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Uui />)
    expect(baseElement).toBeTruthy()
  })
})

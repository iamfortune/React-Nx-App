import { render } from '@testing-library/react';

import NoteForm from './note-form';

describe('NoteForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NoteForm />);
    expect(baseElement).toBeTruthy();
  });
});

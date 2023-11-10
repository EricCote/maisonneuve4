// This creates a "goto" popup when the user presses the letter G.
// The popup prompts a slide number, and navigates to it.

import { FormEvent, RefObject, useEffect, useRef, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

//this flag will only register the event handler once when in StrictMode (dev mode)
let isEventRegistered = false;

function GotoPopup() {
  const [show, setShow] = useState<boolean>(false);
  const txtNombre = useRef<HTMLInputElement>();

  let options = { capture: true };

  function handleClose() {
    setShow(false);
  }

  function GotoPage(evt: FormEvent) {
    evt.preventDefault();
    const page = txtNombre.current!.value;
    setShow(false);
    location.hash = `#${page}`;
  }

  function handleKeyDown(evt: KeyboardEvent) {
    if ((evt.metaKey || evt.ctrlKey) && evt.key == 'g') {
      evt.stopImmediatePropagation();
      evt.stopPropagation();
      evt.preventDefault();

      setShow(!txtNombre.current);
    }
  }

  useEffect(() => {
    if (!isEventRegistered) {
      window.removeEventListener('keydown', handleKeyDown, options);
      window.addEventListener('keydown', handleKeyDown, options);
      isEventRegistered = true;
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown, options);
      isEventRegistered = false;
    };
  }, []);

  //If we've just started re-rendering after starting to show the popup, set the focus.
  useEffect(() => {
    if (show) {
      txtNombre.current!.focus();
    }
  }, [show]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={GotoPage}>
        <Modal.Header closeButton>
          <Modal.Title>Go to Slide</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            ref={txtNombre as RefObject<HTMLInputElement>}
            placeholder='Slide Number'
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='primary' onClick={GotoPage}>
            Go to Slide
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default GotoPopup;

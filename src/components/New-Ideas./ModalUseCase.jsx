import React, { useState } from "react";  
import ControlledModal from "./Modal";
const [shouldShowModal, setShouldShowModal] = useState(false);
<>
  <ControlledModal
    shouldShow={shouldShowModal}
    onRequestClose={() => setShouldShowModal(false)}
  >
    <h1>Hello!</h1>
  </ControlledModal>

  <button onClick={() => setShouldShowModal(!shouldShowModal)}>
    {shouldShowModal ? "Hide Modal" : "Show Modal"}
  </button>
</>;

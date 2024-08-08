import Button from "../components/Button";
import Modal from "../components/Modal";
import { useState } from "react";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <Button primary onClick={handleClose}>
      I accept
    </Button>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
        Here is an important message that you need to read. Please read this
      </p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleOpen} primary rounded>
        Open Modal
      </Button>
      {showModal && modal}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      accumsan in neque ac vulputate. Duis blandit, mauris congue maximus
      condimentum, augue lectus rhoncus sapien, non tincidunt augue lorem ut
      odio. Cras viverra cursus rutrum. Fusce non lacus nunc. Vestibulum
      consectetur ullamcorper dolor, in pretium ante laoreet sed. Quisque lectus
      ligula, laoreet ac augue ut, aliquet ullamcorper odio. Integer odio metus,
      fringilla vitae odio a, laoreet vehicula ante. Sed cursus sodales odio, eu
      tempor libero volutpat faucibus. Nulla semper, mauris quis hendrerit
      auctor, diam mauris bibendum ligula, id blandit nulla lacus a lectus.
      Pellentesque ut ligula sodales, pellentesque nisi et, vehicula justo.
      Mauris mattis ipsum turpis, imperdiet dictum erat efficitur et. Morbi eu
      erat ex. Aliquam eu justo eget nibh dapibus dignissim ac eu ante. Morbi
      egestas diam ac lectus mollis facilisis. Vivamus nec enim non mauris
      tristique commodo nec a felis. Duis posuere vehicula mauris, a vestibulum
      nibh rutrum vestibulum. Proin mollis sem vel ipsum mattis, vel euismod
      lacus efficitur. Suspendisse vel nisi lacinia, lacinia purus sed, mollis
      eros. Sed tristique massa gravida erat consectetur, in commodo eros
      varius. Nam pharetra egestas feugiat. Maecenas aliquet ligula purus,
      pharetra semper justo interdum in. Donec malesuada ac sem vel
      sollicitudin. Nam maximus consectetur commodo. Aliquam consequat faucibus
      scelerisque. Aliquam dictum quam sed lorem tincidunt posuere. Proin semper
      nec risus non fermentum. Quisque lacinia et enim eget feugiat. Maecenas
      quis auctor neque. Donec volutpat purus quis felis laoreet, non euismod
      nunc maximus. Morbi erat urna, ultrices vel sem et, ornare scelerisque
      magna. Ut a erat et risus ullamcorper aliquam. Quisque ex nunc, finibus at
      lobortis sed, cursus nec sapien. Sed elementum, erat sit amet mattis
      fermentum, mauris velit finibus nisi, vel lobortis metus tellus a justo.
      Suspendisse at metus ac turpis sollicitudin commodo. Ut pharetra porttitor
      odio, gravida dictum arcu lobortis ut. Nunc commodo nunc nibh, at viverra
      ipsum auctor ultrices. Nunc nunc est, luctus quis metus eget, egestas
      sollicitudin ligula. Donec blandit tortor eu magna accumsan, sed rhoncus
      est pellentesque. Sed metus diam, dictum non mi et, cursus pretium enim.
      Fusce eu malesuada dolor, non lacinia neque. Integer posuere lobortis
      dapibus. Ut eu tincidunt dui. Etiam ac urna sapien. Pellentesque feugiat,
      mi non tristique fringilla, mi sem finibus arcu, consequat tincidunt purus
      nulla ac dui. Duis sed lacus ut erat iaculis ultricies eu non lorem. Cras
      placerat ligula quis ligula vulputate, vel imperdiet magna suscipit.
      Aenean non eros vestibulum, finibus lacus et, placerat velit. Maecenas
      auctor, augue tincidunt tempus viverra, odio lorem laoreet velit, eget
      tristique ante nulla id lectus. Donec sapien neque, luctus eget efficitur
      ut, tincidunt posuere sapien. Nam in nisl sed nibh laoreet dictum.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Aliquam finibus augue lectus, et tincidunt turpis
      tempus vitae. Ut porta leo sit amet nibh vulputate, vitae cursus mauris
      eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
      posuere cubilia curae; Quisque ut egestas nisi. Nam sit amet elit sed dui
      vulputate sollicitudin. Proin scelerisque massa pretium odio dictum
      tristique. Sed lorem nulla, rhoncus a nunc nec, suscipit fermentum turpis.
      Suspendisse potenti. Fusce sagittis eros non vehicula hendrerit. Cras sed
      ullamcorper odio, quis laoreet nibh. Pellentesque vulputate, nisi in
      ullamcorper fermentum, ex felis molestie nisl, sed sagittis nulla purus
      sed elit. Etiam dolor purus, tincidunt vel ornare quis, gravida et tortor.
      Nullam interdum est vel justo sodales, a elementum nisi pulvinar. Cras
      gravida, lacus at tempor tempor, ligula ipsum sagittis velit, in aliquet
      metus diam eu ipsum. Nam neque ante, imperdiet eget ligula eu, suscipit
      mattis sem. Donec facilisis auctor ultrices. Nulla consequat lorem vitae
      orci sollicitudin tristique. Aliquam erat volutpat. Ut consequat mi ac mi
      hendrerit, ut consequat lacus tempor. Donec ac mauris sit amet ex
      ullamcorper efficitur. Vivamus sed est ultricies est porttitor euismod sed
      vitae orci. Nullam vestibulum tortor sit amet tellus bibendum, a elementum
      magna blandit. Aenean egestas ex vitae leo ornare finibus. Ut luctus
      facilisis magna vitae pharetra. Donec lacinia ex purus, in ornare justo
      lobortis non. Ut eu magna nulla. Quisque eu sagittis velit. Maecenas id
      felis porttitor, aliquet nulla quis, accumsan nisl. Nunc ut auctor diam.
      Sed tristique venenatis odio, non vulputate sapien luctus id. Sed eget
      luctus quam. Pellentesque porta diam risus, nec tincidunt libero accumsan
      vitae. Sed posuere, quam nec ultricies feugiat, massa dolor blandit sem,
      eu auctor leo eros id libero. Fusce et finibus metus, a commodo lorem.
      Aliquam volutpat aliquet leo a cursus. Aenean rhoncus aliquam ex vel
      scelerisque. Suspendisse facilisis ligula sed odio faucibus, sit amet
      efficitur orci malesuada. Praesent mattis nec sapien sit amet tempus.
      Pellentesque suscipit orci ut sapien convallis viverra. Integer sed varius
      lorem. Morbi aliquam volutpat enim ac viverra. Duis et rutrum diam. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan in
      neque ac vulputate. Duis blandit, mauris congue maximus condimentum, augue
      lectus rhoncus sapien, non tincidunt augue lorem ut odio. Cras viverra
      cursus rutrum. Fusce non lacus nunc. Vestibulum consectetur ullamcorper
      dolor, in pretium ante laoreet sed. Quisque lectus ligula, laoreet ac
      augue ut, aliquet ullamcorper odio. Integer odio metus, fringilla vitae
      odio a, laoreet vehicula ante. Sed cursus sodales odio, eu tempor libero
      volutpat faucibus. Nulla semper, mauris quis hendrerit auctor, diam mauris
      bibendum ligula, id blandit nulla lacus a lectus. Pellentesque ut ligula
      sodales, pellentesque nisi et, vehicula justo. Mauris mattis ipsum turpis,
      imperdiet dictum erat efficitur et. Morbi eu erat ex. Aliquam eu justo
      eget nibh dapibus dignissim ac eu ante. Morbi egestas diam ac lectus
      mollis facilisis. Vivamus nec enim non mauris tristique commodo nec a
      felis. Duis posuere vehicula mauris, a vestibulum nibh rutrum vestibulum.
      Proin mollis sem vel ipsum mattis, vel euismod lacus efficitur.
      Suspendisse vel nisi lacinia, lacinia purus sed, mollis eros. Sed
      tristique massa gravida erat consectetur, in commodo eros varius. Nam
      pharetra egestas feugiat. Maecenas aliquet ligula purus, pharetra semper
      justo interdum in. Donec malesuada ac sem vel sollicitudin. Nam maximus
      consectetur commodo. Aliquam consequat faucibus scelerisque. Aliquam
      dictum quam sed lorem tincidunt posuere. Proin semper nec risus non
      fermentum. Quisque lacinia et enim eget feugiat. Maecenas quis auctor
      neque. Donec volutpat purus quis felis laoreet, non euismod nunc maximus.
      Morbi erat urna, ultrices vel sem et, ornare scelerisque magna. Ut a erat
      et risus ullamcorper aliquam. Quisque ex nunc, finibus at lobortis sed,
      cursus nec sapien. Sed elementum, erat sit amet mattis fermentum, mauris
      velit finibus nisi, vel lobortis metus tellus a justo. Suspendisse at
      metus ac turpis sollicitudin commodo. Ut pharetra porttitor odio, gravida
      dictum arcu lobortis ut. Nunc commodo nunc nibh, at viverra ipsum auctor
      ultrices. Nunc nunc est, luctus quis metus eget, egestas sollicitudin
      ligula. Donec blandit tortor eu magna accumsan, sed rhoncus est
      pellentesque. Sed metus diam, dictum non mi et, cursus pretium enim. Fusce
      eu malesuada dolor, non lacinia neque. Integer posuere lobortis dapibus.
      Ut eu tincidunt dui. Etiam ac urna sapien. Pellentesque feugiat, mi non
      tristique fringilla, mi sem finibus arcu, consequat tincidunt purus nulla
      ac dui. Duis sed lacus ut erat iaculis ultricies eu non lorem. Cras
      placerat ligula quis ligula vulputate, vel imperdiet magna suscipit.
      Aenean non eros vestibulum, finibus lacus et, placerat velit. Maecenas
      auctor, augue tincidunt tempus viverra, odio lorem laoreet velit, eget
      tristique ante nulla id lectus. Donec sapien neque, luctus eget efficitur
      ut, tincidunt posuere sapien. Nam in nisl sed nibh laoreet dictum.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Aliquam finibus augue lectus, et tincidunt turpis
      tempus vitae. Ut porta leo sit amet nibh vulputate, vitae cursus mauris
      eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
      posuere cubilia curae; Quisque ut egestas nisi. Nam sit amet elit sed dui
      vulputate sollicitudin. Proin scelerisque massa pretium odio dictum
      tristique. Sed lorem nulla, rhoncus a nunc nec, suscipit fermentum turpis.
      Suspendisse potenti. Fusce sagittis eros non vehicula hendrerit. Cras sed
      ullamcorper odio, quis laoreet nibh. Pellentesque vulputate, nisi in
      ullamcorper fermentum, ex felis molestie nisl, sed sagittis nulla purus
      sed elit. Etiam dolor purus, tincidunt vel ornare quis, gravida et tortor.
      Nullam interdum est vel justo sodales, a elementum nisi pulvinar. Cras
      gravida, lacus at tempor tempor, ligula ipsum sagittis velit, in aliquet
      metus diam eu ipsum. Nam neque ante, imperdiet eget ligula eu, suscipit
      mattis sem. Donec facilisis auctor ultrices. Nulla consequat lorem vitae
      orci sollicitudin tristique. Aliquam erat volutpat. Ut consequat mi ac mi
      hendrerit, ut consequat lacus tempor. Donec ac mauris sit amet ex
      ullamcorper efficitur. Vivamus sed est ultricies est porttitor euismod sed
      vitae orci. Nullam vestibulum tortor sit amet tellus bibendum, a elementum
      magna blandit. Aenean egestas ex vitae leo ornare finibus. Ut luctus
      facilisis magna vitae pharetra. Donec lacinia ex purus, in ornare justo
      lobortis non. Ut eu magna nulla. Quisque eu sagittis velit. Maecenas id
      felis porttitor, aliquet nulla quis, accumsan nisl. Nunc ut auctor diam.
      Sed tristique venenatis odio, non vulputate sapien luctus id. Sed eget
      luctus quam. Pellentesque porta diam risus, nec tincidunt libero accumsan
      vitae. Sed posuere, quam nec ultricies feugiat, massa dolor blandit sem,
      eu auctor leo eros id libero. Fusce et finibus metus, a commodo lorem.
      Aliquam volutpat aliquet leo a cursus. Aenean rhoncus aliquam ex vel
      scelerisque. Suspendisse facilisis ligula sed odio faucibus, sit amet
      efficitur orci malesuada. Praesent mattis nec sapien sit amet tempus.
      Pellentesque suscipit orci ut sapien convallis viverra. Integer sed varius
      lorem. Morbi aliquam volutpat enim ac viverra. Duis et rutrum diam. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan in
      neque ac vulputate. Duis blandit, mauris congue maximus condimentum, augue
      lectus rhoncus sapien, non tincidunt augue lorem ut odio. Cras viverra
      cursus rutrum. Fusce non lacus nunc. Vestibulum consectetur ullamcorper
      dolor, in pretium ante laoreet sed. Quisque lectus ligula, laoreet ac
      augue ut, aliquet ullamcorper odio. Integer odio metus, fringilla vitae
      odio a, laoreet vehicula ante. Sed cursus sodales odio, eu tempor libero
      volutpat faucibus. Nulla semper, mauris quis hendrerit auctor, diam mauris
      bibendum ligula, id blandit nulla lacus a lectus. Pellentesque ut ligula
      sodales, pellentesque nisi et, vehicula justo. Mauris mattis ipsum turpis,
      imperdiet dictum erat efficitur et. Morbi eu erat ex. Aliquam eu justo
      eget nibh dapibus dignissim ac eu ante. Morbi egestas diam ac lectus
      mollis facilisis. Vivamus nec enim non mauris tristique commodo nec a
      felis. Duis posuere vehicula mauris, a vestibulum nibh rutrum vestibulum.
      Proin mollis sem vel ipsum mattis, vel euismod lacus efficitur.
      Suspendisse vel nisi lacinia, lacinia purus sed, mollis eros. Sed
      tristique massa gravida erat consectetur, in commodo eros varius. Nam
      pharetra egestas feugiat. Maecenas aliquet ligula purus, pharetra semper
      justo interdum in. Donec malesuada ac sem vel sollicitudin. Nam maximus
      consectetur commodo. Aliquam consequat faucibus scelerisque. Aliquam
      dictum quam sed lorem tincidunt posuere. Proin semper nec risus non
      fermentum. Quisque lacinia et enim eget feugiat. Maecenas quis auctor
      neque. Donec volutpat purus quis felis laoreet, non euismod nunc maximus.
      Morbi erat urna, ultrices vel sem et, ornare scelerisque magna. Ut a erat
      et risus ullamcorper aliquam. Quisque ex nunc, finibus at lobortis sed,
      cursus nec sapien. Sed elementum, erat sit amet mattis fermentum, mauris
      velit finibus nisi, vel lobortis metus tellus a justo. Suspendisse at
      metus ac turpis sollicitudin commodo. Ut pharetra porttitor odio, gravida
      dictum arcu lobortis ut. Nunc commodo nunc nibh, at viverra ipsum auctor
      ultrices. Nunc nunc est, luctus quis metus eget, egestas sollicitudin
      ligula. Donec blandit tortor eu magna accumsan, sed rhoncus est
      pellentesque. Sed metus diam, dictum non mi et, cursus pretium enim. Fusce
      eu malesuada dolor, non lacinia neque. Integer posuere lobortis dapibus.
      Ut eu tincidunt dui. Etiam ac urna sapien. Pellentesque feugiat, mi non
      tristique fringilla, mi sem finibus arcu, consequat tincidunt purus nulla
      ac dui. Duis sed lacus ut erat iaculis ultricies eu non lorem. Cras
      placerat ligula quis ligula vulputate, vel imperdiet magna suscipit.
      Aenean non eros vestibulum, finibus lacus et, placerat velit. Maecenas
      auctor, augue tincidunt tempus viverra, odio lorem laoreet velit, eget
      tristique ante nulla id lectus. Donec sapien neque, luctus eget efficitur
      ut, tincidunt posuere sapien. Nam in nisl sed nibh laoreet dictum.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Aliquam finibus augue lectus, et tincidunt turpis
      tempus vitae. Ut porta leo sit amet nibh vulputate, vitae cursus mauris
      eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
      posuere cubilia curae; Quisque ut egestas nisi. Nam sit amet elit sed dui
      vulputate sollicitudin. Proin scelerisque massa pretium odio dictum
      tristique. Sed lorem nulla, rhoncus a nunc nec, suscipit fermentum turpis.
      Suspendisse potenti. Fusce sagittis eros non vehicula hendrerit. Cras sed
      ullamcorper odio, quis laoreet nibh. Pellentesque vulputate, nisi in
      ullamcorper fermentum, ex felis molestie nisl, sed sagittis nulla purus
      sed elit. Etiam dolor purus, tincidunt vel ornare quis, gravida et tortor.
      Nullam interdum est vel justo sodales, a elementum nisi pulvinar. Cras
      gravida, lacus at tempor tempor, ligula ipsum sagittis velit, in aliquet
      metus diam eu ipsum. Nam neque ante, imperdiet eget ligula eu, suscipit
      mattis sem. Donec facilisis auctor ultrices. Nulla consequat lorem vitae
      orci sollicitudin tristique. Aliquam erat volutpat. Ut consequat mi ac mi
      hendrerit, ut consequat lacus tempor. Donec ac mauris sit amet ex
      ullamcorper efficitur. Vivamus sed est ultricies est porttitor euismod sed
      vitae orci. Nullam vestibulum tortor sit amet tellus bibendum, a elementum
      magna blandit. Aenean egestas ex vitae leo ornare finibus. Ut luctus
      facilisis magna vitae pharetra. Donec lacinia ex purus, in ornare justo
      lobortis non. Ut eu magna nulla. Quisque eu sagittis velit. Maecenas id
      felis porttitor, aliquet nulla quis, accumsan nisl. Nunc ut auctor diam.
      Sed tristique venenatis odio, non vulputate sapien luctus id. Sed eget
      luctus quam. Pellentesque porta diam risus, nec tincidunt libero accumsan
      vitae. Sed posuere, quam nec ultricies feugiat, massa dolor blandit sem,
      eu auctor leo eros id libero. Fusce et finibus metus, a commodo lorem.
      Aliquam volutpat aliquet leo a cursus. Aenean rhoncus aliquam ex vel
      scelerisque. Suspendisse facilisis ligula sed odio faucibus, sit amet
      efficitur orci malesuada. Praesent mattis nec sapien sit amet tempus.
      Pellentesque suscipit orci ut sapien convallis viverra. Integer sed varius
      lorem. Morbi aliquam volutpat enim ac viverra. Duis et rutrum diam. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan in
      neque ac vulputate. Duis blandit, mauris congue maximus condimentum, augue
      lectus rhoncus sapien, non tincidunt augue lorem ut odio. Cras viverra
      cursus rutrum. Fusce non lacus nunc. Vestibulum consectetur ullamcorper
      dolor, in pretium ante laoreet sed. Quisque lectus ligula, laoreet ac
      augue ut, aliquet ullamcorper odio. Integer odio metus, fringilla vitae
      odio a, laoreet vehicula ante. Sed cursus sodales odio, eu tempor libero
      volutpat faucibus. Nulla semper, mauris quis hendrerit auctor, diam mauris
      bibendum ligula, id blandit nulla lacus a lectus. Pellentesque ut ligula
      sodales, pellentesque nisi et, vehicula justo. Mauris mattis ipsum turpis,
      imperdiet dictum erat efficitur et. Morbi eu erat ex. Aliquam eu justo
      eget nibh dapibus dignissim ac eu ante. Morbi egestas diam ac lectus
      mollis facilisis. Vivamus nec enim non mauris tristique commodo nec a
      felis. Duis posuere vehicula mauris, a vestibulum nibh rutrum vestibulum.
      Proin mollis sem vel ipsum mattis, vel euismod lacus efficitur.
      Suspendisse vel nisi lacinia, lacinia purus sed, mollis eros. Sed
      tristique massa gravida erat consectetur, in commodo eros varius. Nam
      pharetra egestas feugiat. Maecenas aliquet ligula purus, pharetra semper
      justo interdum in. Donec malesuada ac sem vel sollicitudin. Nam maximus
      consectetur commodo. Aliquam consequat faucibus scelerisque. Aliquam
      dictum quam sed lorem tincidunt posuere. Proin semper nec risus non
      fermentum. Quisque lacinia et enim eget feugiat. Maecenas quis auctor
      neque. Donec volutpat purus quis felis laoreet, non euismod nunc maximus.
      Morbi erat urna, ultrices vel sem et, ornare scelerisque magna. Ut a erat
      et risus ullamcorper aliquam. Quisque ex nunc, finibus at lobortis sed,
      cursus nec sapien. Sed elementum, erat sit amet mattis fermentum, mauris
      velit finibus nisi, vel lobortis metus tellus a justo. Suspendisse at
      metus ac turpis sollicitudin commodo. Ut pharetra porttitor odio, gravida
      dictum arcu lobortis ut. Nunc commodo nunc nibh, at viverra ipsum auctor
      ultrices. Nunc nunc est, luctus quis metus eget, egestas sollicitudin
      ligula. Donec blandit tortor eu magna accumsan, sed rhoncus est
      pellentesque. Sed metus diam, dictum non mi et, cursus pretium enim. Fusce
      eu malesuada dolor, non lacinia neque. Integer posuere lobortis dapibus.
      Ut eu tincidunt dui. Etiam ac urna sapien. Pellentesque feugiat, mi non
      tristique fringilla, mi sem finibus arcu, consequat tincidunt purus nulla
      ac dui. Duis sed lacus ut erat iaculis ultricies eu non lorem. Cras
      placerat ligula quis ligula vulputate, vel imperdiet magna suscipit.
      Aenean non eros vestibulum, finibus lacus et, placerat velit. Maecenas
      auctor, augue tincidunt tempus viverra, odio lorem laoreet velit, eget
      tristique ante nulla id lectus. Donec sapien neque, luctus eget efficitur
      ut, tincidunt posuere sapien. Nam in nisl sed nibh laoreet dictum.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Aliquam finibus augue lectus, et tincidunt turpis
      tempus vitae. Ut porta leo sit amet nibh vulputate, vitae cursus mauris
      eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
      posuere cubilia curae; Quisque ut egestas nisi. Nam sit amet elit sed dui
      vulputate sollicitudin. Proin scelerisque massa pretium odio dictum
      tristique. Sed lorem nulla, rhoncus a nunc nec, suscipit fermentum turpis.
      Suspendisse potenti. Fusce sagittis eros non vehicula hendrerit. Cras sed
      ullamcorper odio, quis laoreet nibh. Pellentesque vulputate, nisi in
      ullamcorper fermentum, ex felis molestie nisl, sed sagittis nulla purus
      sed elit. Etiam dolor purus, tincidunt vel ornare quis, gravida et tortor.
      Nullam interdum est vel justo sodales, a elementum nisi pulvinar. Cras
      gravida, lacus at tempor tempor, ligula ipsum sagittis velit, in aliquet
      metus diam eu ipsum. Nam neque ante, imperdiet eget ligula eu, suscipit
      mattis sem. Donec facilisis auctor ultrices. Nulla consequat lorem vitae
      orci sollicitudin tristique. Aliquam erat volutpat. Ut consequat mi ac mi
      hendrerit, ut consequat lacus tempor. Donec ac mauris sit amet ex
      ullamcorper efficitur. Vivamus sed est ultricies est porttitor euismod sed
      vitae orci. Nullam vestibulum tortor sit amet tellus bibendum, a elementum
      magna blandit. Aenean egestas ex vitae leo ornare finibus. Ut luctus
      facilisis magna vitae pharetra. Donec lacinia ex purus, in ornare justo
      lobortis non. Ut eu magna nulla. Quisque eu sagittis velit. Maecenas id
      felis porttitor, aliquet nulla quis, accumsan nisl. Nunc ut auctor diam.
      Sed tristique venenatis odio, non vulputate sapien luctus id. Sed eget
      luctus quam. Pellentesque porta diam risus, nec tincidunt libero accumsan
      vitae. Sed posuere, quam nec ultricies feugiat, massa dolor blandit sem,
      eu auctor leo eros id libero. Fusce et finibus metus, a commodo lorem.
      Aliquam volutpat aliquet leo a cursus. Aenean rhoncus aliquam ex vel
      scelerisque. Suspendisse facilisis ligula sed odio faucibus, sit amet
      efficitur orci malesuada. Praesent mattis nec sapien sit amet tempus.
      Pellentesque suscipit orci ut sapien convallis viverra. Integer sed varius
      lorem. Morbi aliquam volutpat enim ac viverra. Duis et rutrum diam. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan in
      neque ac vulputate. Duis blandit, mauris congue maximus condimentum, augue
      lectus rhoncus sapien, non tincidunt augue lorem ut odio. Cras viverra
      cursus rutrum. Fusce non lacus nunc. Vestibulum consectetur ullamcorper
      dolor, in pretium ante laoreet sed. Quisque lectus ligula, laoreet ac
      augue ut, aliquet ullamcorper odio. Integer odio metus, fringilla vitae
      odio a, laoreet vehicula ante. Sed cursus sodales odio, eu tempor libero
      volutpat faucibus. Nulla semper, mauris quis hendrerit auctor, diam mauris
      bibendum ligula, id blandit nulla lacus a lectus. Pellentesque ut ligula
      sodales, pellentesque nisi et, vehicula justo. Mauris mattis ipsum turpis,
      imperdiet dictum erat efficitur et. Morbi eu erat ex. Aliquam eu justo
      eget nibh dapibus dignissim ac eu ante. Morbi egestas diam ac lectus
      mollis facilisis. Vivamus nec enim non mauris tristique commodo nec a
      felis. Duis posuere vehicula mauris, a vestibulum nibh rutrum vestibulum.
      Proin mollis sem vel ipsum mattis, vel euismod lacus efficitur.
      Suspendisse vel nisi lacinia, lacinia purus sed, mollis eros. Sed
      tristique massa gravida erat consectetur, in commodo eros varius. Nam
      pharetra egestas feugiat. Maecenas aliquet ligula purus, pharetra semper
      justo interdum in. Donec malesuada ac sem vel sollicitudin. Nam maximus
      consectetur commodo. Aliquam consequat faucibus scelerisque. Aliquam
      dictum quam sed lorem tincidunt posuere. Proin semper nec risus non
      fermentum. Quisque lacinia et enim eget feugiat. Maecenas quis auctor
      neque. Donec volutpat purus quis felis laoreet, non euismod nunc maximus.
      Morbi erat urna, ultrices vel sem et, ornare scelerisque magna. Ut a erat
      et risus ullamcorper aliquam. Quisque ex nunc, finibus at lobortis sed,
      cursus nec sapien. Sed elementum, erat sit amet mattis fermentum, mauris
      velit finibus nisi, vel lobortis metus tellus a justo. Suspendisse at
      metus ac turpis sollicitudin commodo. Ut pharetra porttitor odio, gravida
      dictum arcu lobortis ut. Nunc commodo nunc nibh, at viverra ipsum auctor
      ultrices. Nunc nunc est, luctus quis metus eget, egestas sollicitudin
      ligula. Donec blandit tortor eu magna accumsan, sed rhoncus est
      pellentesque. Sed metus diam, dictum non mi et, cursus pretium enim. Fusce
      eu malesuada dolor, non lacinia neque. Integer posuere lobortis dapibus.
      Ut eu tincidunt dui. Etiam ac urna sapien. Pellentesque feugiat, mi non
      tristique fringilla, mi sem finibus arcu, consequat tincidunt purus nulla
      ac dui. Duis sed lacus ut erat iaculis ultricies eu non lorem. Cras
      placerat ligula quis ligula vulputate, vel imperdiet magna suscipit.
      Aenean non eros vestibulum, finibus lacus et, placerat velit. Maecenas
      auctor, augue tincidunt tempus viverra, odio lorem laoreet velit, eget
      tristique ante nulla id lectus. Donec sapien neque, luctus eget efficitur
      ut, tincidunt posuere sapien. Nam in nisl sed nibh laoreet dictum.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Aliquam finibus augue lectus, et tincidunt turpis
      tempus vitae. Ut porta leo sit amet nibh vulputate, vitae cursus mauris
      eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
      posuere cubilia curae; Quisque ut egestas nisi. Nam sit amet elit sed dui
      vulputate sollicitudin. Proin scelerisque massa pretium odio dictum
      tristique. Sed lorem nulla, rhoncus a nunc nec, suscipit fermentum turpis.
      Suspendisse potenti. Fusce sagittis eros non vehicula hendrerit. Cras sed
      ullamcorper odio, quis laoreet nibh. Pellentesque vulputate, nisi in
      ullamcorper fermentum, ex felis molestie nisl, sed sagittis nulla purus
      sed elit. Etiam dolor purus, tincidunt vel ornare quis, gravida et tortor.
      Nullam interdum est vel justo sodales, a elementum nisi pulvinar. Cras
      gravida, lacus at tempor tempor, ligula ipsum sagittis velit, in aliquet
      metus diam eu ipsum. Nam neque ante, imperdiet eget ligula eu, suscipit
      mattis sem. Donec facilisis auctor ultrices. Nulla consequat lorem vitae
      orci sollicitudin tristique. Aliquam erat volutpat. Ut consequat mi ac mi
      hendrerit, ut consequat lacus tempor. Donec ac mauris sit amet ex
      ullamcorper efficitur. Vivamus sed est ultricies est porttitor euismod sed
      vitae orci. Nullam vestibulum tortor sit amet tellus bibendum, a elementum
      magna blandit. Aenean egestas ex vitae leo ornare finibus. Ut luctus
      facilisis magna vitae pharetra. Donec lacinia ex purus, in ornare justo
      lobortis non. Ut eu magna nulla. Quisque eu sagittis velit. Maecenas id
      felis porttitor, aliquet nulla quis, accumsan nisl. Nunc ut auctor diam.
      Sed tristique venenatis odio, non vulputate sapien luctus id. Sed eget
      luctus quam. Pellentesque porta diam risus, nec tincidunt libero accumsan
      vitae. Sed posuere, quam nec ultricies feugiat, massa dolor blandit sem,
      eu auctor leo eros id libero. Fusce et finibus metus, a commodo lorem.
      Aliquam volutpat aliquet leo a cursus. Aenean rhoncus aliquam ex vel
      scelerisque. Suspendisse facilisis ligula sed odio faucibus, sit amet
      efficitur orci malesuada. Praesent mattis nec sapien sit amet tempus.
      Pellentesque suscipit orci ut sapien convallis viverra. Integer sed varius
      lorem. Morbi aliquam volutpat enim ac viverra. Duis et rutrum diam. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan in
      neque ac vulputate. Duis blandit, mauris congue maximus condimentum, augue
      lectus rhoncus sapien, non tincidunt augue lorem ut odio. Cras viverra
      cursus rutrum. Fusce non lacus nunc. Vestibulum consectetur ullamcorper
      dolor, in pretium ante laoreet sed. Quisque lectus ligula, laoreet ac
      augue ut, aliquet ullamcorper odio. Integer odio metus, fringilla vitae
      odio a, laoreet vehicula ante. Sed cursus sodales odio, eu tempor libero
      volutpat faucibus. Nulla semper, mauris quis hendrerit auctor, diam mauris
      bibendum ligula, id blandit nulla lacus a lectus. Pellentesque ut ligula
      sodales, pellentesque nisi et, vehicula justo. Mauris mattis ipsum turpis,
      imperdiet dictum erat efficitur et. Morbi eu erat ex. Aliquam eu justo
      eget nibh dapibus dignissim ac eu ante. Morbi egestas diam ac lectus
      mollis facilisis. Vivamus nec enim non mauris tristique commodo nec a
      felis. Duis posuere vehicula mauris, a vestibulum nibh rutrum vestibulum.
      Proin mollis sem vel ipsum mattis, vel euismod lacus efficitur.
      Suspendisse vel nisi lacinia, lacinia purus sed, mollis eros. Sed
      tristique massa gravida erat consectetur, in commodo eros varius. Nam
      pharetra egestas feugiat. Maecenas aliquet ligula purus, pharetra semper
      justo interdum in. Donec malesuada ac sem vel sollicitudin. Nam maximus
      consectetur commodo. Aliquam consequat faucibus scelerisque. Aliquam
      dictum quam sed lorem tincidunt posuere. Proin semper nec risus non
      fermentum. Quisque lacinia et enim eget feugiat. Maecenas quis auctor
      neque. Donec volutpat purus quis felis laoreet, non euismod nunc maximus.
      Morbi erat urna, ultrices vel sem et, ornare scelerisque magna. Ut a erat
      et risus ullamcorper aliquam. Quisque ex nunc, finibus at lobortis sed,
      cursus nec sapien. Sed elementum, erat sit amet mattis fermentum, mauris
      velit finibus nisi, vel lobortis metus tellus a justo. Suspendisse at
      metus ac turpis sollicitudin commodo. Ut pharetra porttitor odio, gravida
      dictum arcu lobortis ut. Nunc commodo nunc nibh, at viverra ipsum auctor
      ultrices. Nunc nunc est, luctus quis metus eget, egestas sollicitudin
      ligula. Donec blandit tortor eu magna accumsan, sed rhoncus est
      pellentesque. Sed metus diam, dictum non mi et, cursus pretium enim. Fusce
      eu malesuada dolor, non lacinia neque. Integer posuere lobortis dapibus.
      Ut eu tincidunt dui. Etiam ac urna sapien. Pellentesque feugiat, mi non
      tristique fringilla, mi sem finibus arcu, consequat tincidunt purus nulla
      ac dui. Duis sed lacus ut erat iaculis ultricies eu non lorem. Cras
      placerat ligula quis ligula vulputate, vel imperdiet magna suscipit.
      Aenean non eros vestibulum, finibus lacus et, placerat velit. Maecenas
      auctor, augue tincidunt tempus viverra, odio lorem laoreet velit, eget
      tristique ante nulla id lectus. Donec sapien neque, luctus eget efficitur
      ut, tincidunt posuere sapien. Nam in nisl sed nibh laoreet dictum.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Aliquam finibus augue lectus, et tincidunt turpis
      tempus vitae. Ut porta leo sit amet nibh vulputate, vitae cursus mauris
      eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
      posuere cubilia curae; Quisque ut egestas nisi. Nam sit amet elit sed dui
      vulputate sollicitudin. Proin scelerisque massa pretium odio dictum
      tristique. Sed lorem nulla, rhoncus a nunc nec, suscipit fermentum turpis.
      Suspendisse potenti. Fusce sagittis eros non vehicula hendrerit. Cras sed
      ullamcorper odio, quis laoreet nibh. Pellentesque vulputate, nisi in
      ullamcorper fermentum, ex felis molestie nisl, sed sagittis nulla purus
      sed elit. Etiam dolor purus, tincidunt vel ornare quis, gravida et tortor.
      Nullam interdum est vel justo sodales, a elementum nisi pulvinar. Cras
      gravida, lacus at tempor tempor, ligula ipsum sagittis velit, in aliquet
      metus diam eu ipsum. Nam neque ante, imperdiet eget ligula eu, suscipit
      mattis sem. Donec facilisis auctor ultrices. Nulla consequat lorem vitae
      orci sollicitudin tristique. Aliquam erat volutpat. Ut consequat mi ac mi
      hendrerit, ut consequat lacus tempor. Donec ac mauris sit amet ex
      ullamcorper efficitur. Vivamus sed est ultricies est porttitor euismod sed
      vitae orci. Nullam vestibulum tortor sit amet tellus bibendum, a elementum
      magna blandit. Aenean egestas ex vitae leo ornare finibus. Ut luctus
      facilisis magna vitae pharetra. Donec lacinia ex purus, in ornare justo
      lobortis non. Ut eu magna nulla. Quisque eu sagittis velit. Maecenas id
      felis porttitor, aliquet nulla quis, accumsan nisl. Nunc ut auctor diam.
      Sed tristique venenatis odio, non vulputate sapien luctus id. Sed eget
      luctus quam. Pellentesque porta diam risus, nec tincidunt libero accumsan
      vitae. Sed posuere, quam nec ultricies feugiat, massa dolor blandit sem,
      eu auctor leo eros id libero. Fusce et finibus metus, a commodo lorem.
      Aliquam volutpat aliquet leo a cursus. Aenean rhoncus aliquam ex vel
      scelerisque. Suspendisse facilisis ligula sed odio faucibus, sit amet
      efficitur orci malesuada. Praesent mattis nec sapien sit amet tempus.
      Pellentesque suscipit orci ut sapien convallis viverra. Integer sed varius
      lorem. Morbi aliquam volutpat enim ac viverra. Duis et rutrum diam. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan in
      neque ac vulputate. Duis blandit, mauris congue maximus condimentum, augue
      lectus rhoncus sapien, non tincidunt augue lorem ut odio. Cras viverra
      cursus rutrum. Fusce non lacus nunc. Vestibulum consectetur ullamcorper
      dolor, in pretium ante laoreet sed. Quisque lectus ligula, laoreet ac
      augue ut, aliquet ullamcorper odio. Integer odio metus, fringilla vitae
      odio a, laoreet vehicula ante. Sed cursus sodales odio, eu tempor libero
      volutpat faucibus. Nulla semper, mauris quis hendrerit auctor, diam mauris
      bibendum ligula, id blandit nulla lacus a lectus. Pellentesque ut ligula
      sodales, pellentesque nisi et, vehicula justo. Mauris mattis ipsum turpis,
      imperdiet dictum erat efficitur et. Morbi eu erat ex. Aliquam eu justo
      eget nibh dapibus dignissim ac eu ante. Morbi egestas diam ac lectus
      mollis facilisis. Vivamus nec enim non mauris tristique commodo nec a
      felis. Duis posuere vehicula mauris, a vestibulum nibh rutrum vestibulum.
      Proin mollis sem vel ipsum mattis, vel euismod lacus efficitur.
      Suspendisse vel nisi lacinia, lacinia purus sed, mollis eros. Sed
      tristique massa gravida erat consectetur, in commodo eros varius. Nam
      pharetra egestas feugiat. Maecenas aliquet ligula purus, pharetra semper
      justo interdum in. Donec malesuada ac sem vel sollicitudin. Nam maximus
      consectetur commodo. Aliquam consequat faucibus scelerisque. Aliquam
      dictum quam sed lorem tincidunt posuere. Proin semper nec risus non
      fermentum. Quisque lacinia et enim eget feugiat. Maecenas quis auctor
      neque. Donec volutpat purus quis felis laoreet, non euismod nunc maximus.
      Morbi erat urna, ultrices vel sem et, ornare scelerisque magna. Ut a erat
      et risus ullamcorper aliquam. Quisque ex nunc, finibus at lobortis sed,
      cursus nec sapien. Sed elementum, erat sit amet mattis fermentum, mauris
      velit finibus nisi, vel lobortis metus tellus a justo. Suspendisse at
      metus ac turpis sollicitudin commodo. Ut pharetra porttitor odio, gravida
      dictum arcu lobortis ut. Nunc commodo nunc nibh, at viverra ipsum auctor
      ultrices. Nunc nunc est, luctus quis metus eget, egestas sollicitudin
      ligula. Donec blandit tortor eu magna accumsan, sed rhoncus est
      pellentesque. Sed metus diam, dictum non mi et, cursus pretium enim. Fusce
      eu malesuada dolor, non lacinia neque. Integer posuere lobortis dapibus.
      Ut eu tincidunt dui. Etiam ac urna sapien. Pellentesque feugiat, mi non
      tristique fringilla, mi sem finibus arcu, consequat tincidunt purus nulla
      ac dui. Duis sed lacus ut erat iaculis ultricies eu non lorem. Cras
      placerat ligula quis ligula vulputate, vel imperdiet magna suscipit.
      Aenean non eros vestibulum, finibus lacus et, placerat velit. Maecenas
      auctor, augue tincidunt tempus viverra, odio lorem laoreet velit, eget
      tristique ante nulla id lectus. Donec sapien neque, luctus eget efficitur
      ut, tincidunt posuere sapien. Nam in nisl sed nibh laoreet dictum.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Aliquam finibus augue lectus, et tincidunt turpis
      tempus vitae. Ut porta leo sit amet nibh vulputate, vitae cursus mauris
      eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
      posuere cubilia curae; Quisque ut egestas nisi. Nam sit amet elit sed dui
      vulputate sollicitudin. Proin scelerisque massa pretium odio dictum
      tristique. Sed lorem nulla, rhoncus a nunc nec, suscipit fermentum turpis.
      Suspendisse potenti. Fusce sagittis eros non vehicula hendrerit. Cras sed
      ullamcorper odio, quis laoreet nibh. Pellentesque vulputate, nisi in
      ullamcorper fermentum, ex felis molestie nisl, sed sagittis nulla purus
      sed elit. Etiam dolor purus, tincidunt vel ornare quis, gravida et tortor.
      Nullam interdum est vel justo sodales, a elementum nisi pulvinar. Cras
      gravida, lacus at tempor tempor, ligula ipsum sagittis velit, in aliquet
      metus diam eu ipsum. Nam neque ante, imperdiet eget ligula eu, suscipit
      mattis sem. Donec facilisis auctor ultrices. Nulla consequat lorem vitae
      orci sollicitudin tristique. Aliquam erat volutpat. Ut consequat mi ac mi
      hendrerit, ut consequat lacus tempor. Donec ac mauris sit amet ex
      ullamcorper efficitur. Vivamus sed est ultricies est porttitor euismod sed
      vitae orci. Nullam vestibulum tortor sit amet tellus bibendum, a elementum
      magna blandit. Aenean egestas ex vitae leo ornare finibus. Ut luctus
      facilisis magna vitae pharetra. Donec lacinia ex purus, in ornare justo
      lobortis non. Ut eu magna nulla. Quisque eu sagittis velit. Maecenas id
      felis porttitor, aliquet nulla quis, accumsan nisl. Nunc ut auctor diam.
      Sed tristique venenatis odio, non vulputate sapien luctus id. Sed eget
      luctus quam. Pellentesque porta diam risus, nec tincidunt libero accumsan
      vitae. Sed posuere, quam nec ultricies feugiat, massa dolor blandit sem,
      eu auctor leo eros id libero. Fusce et finibus metus, a commodo lorem.
      Aliquam volutpat aliquet leo a cursus. Aenean rhoncus aliquam ex vel
      scelerisque. Suspendisse facilisis ligula sed odio faucibus, sit amet
      efficitur orci malesuada. Praesent mattis nec sapien sit amet tempus.
      Pellentesque suscipit orci ut sapien convallis viverra. Integer sed varius
      lorem. Morbi aliquam volutpat enim ac viverra. Duis et rutrum diam.
    </div>
  );
};

export default ModalPage;

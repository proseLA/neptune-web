<div className="d-flex">
  <Chip label="Chip" />
  <Chip label="Chip" onRemove={() => alert('I have been removed')} />
  <Chip label="Chip" className="has-error" />
  <Chip label="Chip" className="has-error" onRemove={() => alert('I have been removed')} />
</div>;

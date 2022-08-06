window.SIDEBAR_ITEMS = {"enum":[["yaml_break_t","Line break type."],["yaml_emitter_state_t","The emitter states."],["yaml_encoding_t","The stream encoding."],["yaml_error_type_t","Many bad things could happen with the parser and emitter."],["yaml_event_type_t","Event types."],["yaml_mapping_style_t","Mapping styles."],["yaml_node_type_t","Node types."],["yaml_parser_state_t","The states of the parser."],["yaml_scalar_style_t","Scalar styles."],["yaml_sequence_style_t","Sequence styles."],["yaml_token_type_t","Token types."]],"fn":[["yaml_alias_event_initialize","Create an ALIAS event."],["yaml_document_add_mapping","Create a MAPPING node and attach it to the document."],["yaml_document_add_scalar","Create a SCALAR node and attach it to the document."],["yaml_document_add_sequence","Create a SEQUENCE node and attach it to the document."],["yaml_document_append_mapping_pair","Add a pair of a key and a value to a MAPPING node."],["yaml_document_append_sequence_item","Add an item to a SEQUENCE node."],["yaml_document_delete","Delete a YAML document and all its nodes."],["yaml_document_end_event_initialize","Create the DOCUMENT-END event."],["yaml_document_get_node","Get a node of a YAML document."],["yaml_document_get_root_node","Get the root of a YAML document node."],["yaml_document_initialize","Create a YAML document."],["yaml_document_start_event_initialize","Create the DOCUMENT-START event."],["yaml_emitter_close","Finish a YAML stream."],["yaml_emitter_delete","Destroy an emitter."],["yaml_emitter_dump","Emit a YAML document."],["yaml_emitter_emit","Emit an event."],["yaml_emitter_flush","Flush the accumulated characters to the output."],["yaml_emitter_initialize","Initialize an emitter."],["yaml_emitter_open","Start a YAML stream."],["yaml_emitter_set_break","Set the preferred line break."],["yaml_emitter_set_canonical","Set if the output should be in the “canonical” format as in the YAML specification."],["yaml_emitter_set_encoding","Set the output encoding."],["yaml_emitter_set_indent","Set the indentation increment."],["yaml_emitter_set_output","Set a generic output handler."],["yaml_emitter_set_output_string","Set a string output."],["yaml_emitter_set_unicode","Set if unescaped non-ASCII characters are allowed."],["yaml_emitter_set_width","Set the preferred line width. -1 means unlimited."],["yaml_event_delete","Free any memory allocated for an event object."],["yaml_mapping_end_event_initialize","Create a MAPPING-END event."],["yaml_mapping_start_event_initialize","Create a MAPPING-START event."],["yaml_parser_delete","Destroy a parser."],["yaml_parser_initialize","Initialize a parser."],["yaml_parser_load","Parse the input stream and produce the next YAML document."],["yaml_parser_parse","Parse the input stream and produce the next parsing event."],["yaml_parser_scan","Scan the input stream and produce the next token."],["yaml_parser_set_encoding","Set the source encoding."],["yaml_parser_set_input","Set a generic input handler."],["yaml_parser_set_input_string","Set a string input."],["yaml_scalar_event_initialize","Create a SCALAR event."],["yaml_sequence_end_event_initialize","Create a SEQUENCE-END event."],["yaml_sequence_start_event_initialize","Create a SEQUENCE-START event."],["yaml_stream_end_event_initialize","Create the STREAM-END event."],["yaml_stream_start_event_initialize","Create the STREAM-START event."],["yaml_token_delete","Free any memory allocated for a token object."]],"struct":[["yaml_alias_data_t","This structure holds aliases data."],["yaml_document_t","The document structure."],["yaml_emitter_t","The emitter structure."],["yaml_event_t","The event structure."],["yaml_mark_t","The pointer position."],["yaml_node_pair_t","An element of a mapping node."],["yaml_node_t","The node structure."],["yaml_parser_t","The parser structure."],["yaml_simple_key_t","This structure holds information about a potential simple key."],["yaml_stack_t",""],["yaml_tag_directive_t","The tag directive data."],["yaml_token_t","The token structure."],["yaml_version_directive_t","The version directive data."]],"type":[["yaml_node_item_t","An element of a sequence node."],["yaml_read_handler_t","The prototype of a read handler."],["yaml_write_handler_t","The prototype of a write handler."]]};
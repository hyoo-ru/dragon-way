namespace $.$$ {
	
	export class $my_wiki_note extends $hyoo_crus_entity.with({
		Body: $hyoo_crus_text,
		Tags: $hyoo_crus_list.ref( ()=> $my_wiki_note_tag ),
	}) {
		
		@ $mol_mem
		body_selection( next?: readonly[ begin: number, end: number ] ) {
			return this.Body.selection( this.land().auth().lord(), next )
		}

	}
	export class $my_wiki_note_tag extends $hyoo_crus_entity {}

}

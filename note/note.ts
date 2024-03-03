namespace $.$$ {
	
	export class $my_wiki_note extends $hyoo_crus_entity.with({
		Body: $hyoo_crus_text,
		Author: $hyoo_crus_reg.ref( ()=> $my_wiki_note_author ),
	}) {
		
		@ $mol_mem
		body_selection( next?: readonly[ begin: number, end: number ] ) {
			return this.Body.selection( this.land().auth().lord(), next )
		}

	}

	export class $my_wiki_note_author extends $hyoo_crus_entity.with({
		Profile: $hyoo_crus_reg.ref( ()=> $my_wiki_note_author_profile ),
	}) {}

	export class $my_wiki_note_author_profile extends $hyoo_crus_entity.with({
		Fullname: $hyoo_crus_reg_str,
	}) {}

}

namespace $ {
	
	export class $my_wiki_note extends $hyoo_crus_entity.with({
		Body: $hyoo_crus_text,
		Json: $hyoo_crus_atom_json,
		Jsan: $hyoo_crus_atom_jsan,
	}) {
		
		@ $mol_mem
		body_selection( next?: readonly[ begin: number, end: number ] ) {
			return this.Body( next )?.selection( this.land().auth().lord(), next )
		}

	}

}

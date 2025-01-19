namespace $ {
	
	const { rem } = $mol_style_unit
	
	$mol_style_define( $my_wiki, {
		
		View_page: {
			margin: [ 0, 'auto' ],
			flex: {
				basis: rem(60),
				grow: 0,
			},
		},
		
		Note_changed_moment: {
			align: {
				self: 'flex-end',
			},
		},
		
	} )
	
}

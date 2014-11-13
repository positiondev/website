deploy:
	scp -r * positioncoop@wiki.positiondev.com:
	ssh positioncoop@wiki.positiondev.com chmod -R og+rx *

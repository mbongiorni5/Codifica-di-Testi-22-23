# Codifica-di-Testi-22-23
Repository che contiene i file per il progetto realizzato per l'esame universitario di Codifica di Testi ( aa 2022-2023). Il progetto prevede la codifica di tre pagine dei diari di Emanuele Artom tratte dal Fondo Emanuele Artom del Centro di Documentazione Ebraica Contemporanea CDEC, disponibili per la consultazione al link: 
http://digital-library.cdec.it/cdec-web/storico/detail/IT-CDEC-ST0003-000006/diari.html

Le pagine codificate in questo progetto sono le numero 48, 53 e 54. 

Il file XML è stato validato eseguendo il comando su terminale:
java -cp “Xerces-J-bin.2.12.1/xerces-2_12_1/*” dom.Counter -v source/progetto.xml

Il file HTML è stato generato eseguendo il comando su terminale:
java -cp “SaxonHE10-3J/*” net.sf.saxon.Transform -s:./source/progetto.xml -xsl:./source/style.xsl -o:out.html

import { Locale } from "..";

export const da: Locale = {
  // Common words and texts:
  'Yes': `Ja`,
  'No': `Nej`,
  'Cancel': `Afbryd`,
  'Retry': `Prøv igen`,
  'Continue': `Fortsæt`,
  'directory': `mappe`,
  'shortcut': `genvej`,
  'streamfile': `fil`,
  'error': `fejl`,
  'errors': `fejl`,
  'Size': `Størrelse`,
  'Modified': `Ændret`,
  'Owner': `Ejer`,
  'clearList': `$(trash) Nulstil liste`,
  'clearedList': `Nulstillede liste.`,
  'currentLibrary': `(aktuelle bibliotek)`,
  'duplicate': 'Kopier',
  'save': 'Gem',
  'delete': 'Slet',
  'cancel': 'Afbryd',
  'not.connected':'Ikke forbundet til en IBM i',
  'text':'Tekst',
  'lines':'Linier',
  'changed':'Ændret',
  'created':'Oprettet',
  // Sandbox:
  'sandbox.input.user.title': `Bruger for server`,
  'sandbox.input.user.prompt': `Indtast brugernavn for {0}`,
  'sandbox.input.password.title': `Kodeord for server`,
  'sandbox.input.password.prompt': `Indtast kodeord for {0}@{1}`,
  'sandbox.failedToConnect.text': 'Fejl ved forbindelse til {0} som {1}',
  'sandbox.failedToConnect.title': `Fejl ved forbindelse`,
  'sandbox.noPassword': `Forbindelse til {0} afsluttet da intet kodeord blev angivet.`,
  'sandbox.alreadyConnected': `Denne Visual Studio Code instans er allerede forbundet til en server.`,
  'sandbox.connected.modal.title': `Tak for at afprøve Code for IBM i Sandbox!`,
  'sandbox.connected.modal.detail': `Du bruger dette system på egen risiko. Del ingen følsomme eller private informationer.`,
  'sandbox.noconnection.modal.title': `Åh nej! "Sandkassen" er ikke tilgængelig.`,
  'sandbox.noconnection.modal.detail': `Desværre, men "Sandkassen" er ikke tilgængelig lige nu. Prøv igen lidt senere.`,
  // ConnectionBrowser:
  'connectionBrowser.connectTo.lastConnection': `Seneste forbindelse`,
  'connectionBrowser.connectTo.lastUsed': `Senest brugt: {0}`,
  'connectionBrowser.connectTo.title': `Seneste IBM i forbindelser`,
  'connectionBrowser.connectTo.error': `Brug Servere vinduet til at vælge hvilket system, der skal forbindes til.`,
  'connectionBrowser.deleteConnection.warning': `Er du sikker på at du vil slette forbindelsen {0}?`,
  'connectionBrowser.ServerItem.tooltip': ` (forrige forbindelse)`,
  'connectionBrowser.ServerItem.title': `Forbind`,
  // helpView:
  'helpView.getStarted': `Dokumentation`,
  'helpView.officialForum': `Forum`,
  'helpView.reviewIssues': `Se fejlrapporter`,
  'helpView.reportIssue': `Opret en fejlrapport`,
  // ifsBrowser:
  'ifsBrowser.changeWorkingDirectory.prompt': `Skifter aktuelle mappe`,
  'ifsBrowser.changeWorkingDirectory.message': `Aktuelle mappe er skiftet til {0}.`,
  'ifsBrowser.addIFSShortcut.prompt': `Sti til IFS mappe`,
  'ifsBrowser.addIFSShortcut.error': `{0} er ikke en mappe.`,
  'ifsBrowser.addIFSShortcut.errorMessage': `Fejl ved oprettelse af IFS genvej! {0}`,
  'ifsBrowser.removeIFSShortcut.placeHolder': `Vælg IFS genvej til sletning`,
  'ifsBrowser.createDirectory.prompt': `Sti til ny mappe`,
  'ifsBrowser.createDirectory.errorMessage': `Fejl ved oprettelse af ny mappe! {0}`,
  'ifsBrowser.createStreamfile.prompt': `Navn på ny streamfile`,
  'ifsBrowser.createStreamfile.infoMessage': `Opretter streamfile {0}.`,
  'ifsBrowser.createStreamfile.errorMessage': `Fejl ved oprettelse af ny streamfile! {0}`,
  'ifsBrowser.uploadStreamfile.uploadedFiles': `Filer blev sendt.`,
  'ifsBrowser.uploadStreamfile.errorMessage': `Fejl ved afsendelse af filer! {0}`,
  'ifsBrowser.uploadStreamfile.noFilesSelected': `Ingen filer blev valgt.`,
  'ifsBrowser.deleteIFS.rootNotAllowed': `Ikke tilladt at slette root (/) fra IFS Browser.`,
  'ifsBrowser.deleteIFS.warningMessage': `Er du sikker på at du vil slette {0}?`,
  'ifsBrowser.deleteIFS.deletionPrompt': `Når du har slettet mappen, kan den ikke retableres.\nVenligst tast \"{0}\" for at bekræfte sletning.`,
  'ifsBrowser.deleteIFS.deletionPrompt2': ` (Press \'Escape\' to cancel)`,
  'ifsBrowser.deleteIFS.infoMessage': `Slettede {0}.`,
  'ifsBrowser.deleteIFS.errorMessage': `Fejl ved sletning af streamfile! {0}`,
  'ifsBrowser.deleteIFS.cancelled': `Sletning afbrudt.`,
  'ifsBrowser.deleteIFS.default.home.dir':'{0} was the working directory; it is now {1}.',
  'ifsBrowser.moveIFS.prompt': `Nyt navn`,
  'ifsBrowser.moveIFS.errorMessage': `Fejl ved flytning/omdøbning af {0}! {1}`,
  'ifsBrowser.moveIFS.renamed': `{0} blev omdøbt til {1}.`,
  'ifsBrowser.moveIFS.moved': `{0} blev flyttet til {1}.`,
  'ifsBrowser.copyIFS.prompt': `Nyt navn`,
  'ifsBrowser.copyIFS.infoMessage': `{0} blev kopieret til {1}.`,
  'ifsBrowser.copyIFS.errorMessage': `Fejl ved kopiering af {0}! {1}`,
  'ifsBrowser.searchIFS.prompt': `Indtast IFS mappe for søgning`,
  'ifsBrowser.searchIFS.title': `Søg mappe`,
  'ifsBrowser.searchIFS.previousSearches': `Forrige søgninger`,
  'ifsBrowser.searchIFS.placeholder': `Indtast søgetekst eller vælg en af de tidligere søgninger.`,
  'ifsBrowser.searchIFS.placeholder2': `Indtast søgetekst.`,
  'ifsBrowser.searchIFS.title2': `Søg i {0}`,
  'ifsBrowser.searchIFS.noGrep': `'grep' skal være installeret på systemet for IFS søgning.`,
  'ifsBrowser.downloadStreamfile.infoMessage': `Fil blev hentet.`,
  'ifsBrowser.downloadStreamfile.errorMessage': `Fejl ved hentning af {0}! {1}`,
  'ifsBrowser.getChildren.errorMessage': `Fejl ved læsning af objekter.`,
  'ifsBrowser.handleFileListErrors.errorMessage': `{0} {1} opstod ved visning af filer.`,
  'ifsBrowser.doSearchInStreamfiles.title': `Søger`,
  'ifsBrowser.doSearchInStreamfiles.progressMessage': `'{0}' i {1}.`,
  'ifsBrowser.doSearchInStreamfiles.noResults': `Ingen resultater blev fundet ved søgning efter '{0}' i {1}.`,
  'ifsBrowser.doSearchInStreamfiles.errorMessage': `Fejl ved søgning i filer.`,
  // LibraryListView:
  'LibraryListView.changeCurrentLibrary.currentlyActive': `Nuværende`,
  'LibraryListView.changeCurrentLibrary.recentlyUsed': `Tidligere`,
  'LibraryListView.changeCurrentLibrary.placeholder': `Filter eller nyt bibliotek til at sætte som aktuelle`,
  'LibraryListView.changeCurrentLibrary.title': `Skift aktuelle bibliotek`,
  'LibraryListView.changeCurrentLibrary.changedCurrent': `Skiftede aktuelle bibliotek til {0}.`,
  'LibraryListView.changeCurrentLibrary.alreadyCurrent': `{0} er allerede det aktuelle bibliotek.`,
  'LibraryListView.changeUserLibraryList.prompt': `Skift biblioteksliste (du kan bruge '*reset')`,
  'LibraryListView.changeUserLibraryList.removedLibs': `De følgende biblioteker blev fjernet fra den opdaterede biblioteksliste, da de ikke er gyldige: {0}`,
  'LibraryListView.addToLibraryList.prompt': `Tilføj bibliotek`,
  'LibraryListView.addToLibraryList.tooLong': `Bibioteksnavn er for langt.`,
  'LibraryListView.addToLibraryList.alreadyInList': `Bibliotek {0} er allerede i bibliotekslisten.`,
  'LibraryListView.addToLibraryList.invalidLib': `Bibliotek {0} findes ikke.`,
  'LibraryListView.addToLibraryList.addedLib': `Bibliotek {0} blev tilføjet til bibliotekslisten.`,
  'LibraryListView.addToLibraryList.removedLibs': `De følgende biblioteker blev fjernet fra den opdaterede biblioteksliste, da de ikke er gyldige: {0}`,
  'LibraryListView.removeFromLibraryList.removedLib': `Bibliotek {0} blev fjernet fra bibliotekslisten.`,
  'LibraryListView.cleanupLibraryList.removedLibs': `De følgende biblioteker blev fjernet fra den opdaterede biblioteksliste, da de ikke er gyldige: {0}`,
  'LibraryListView.cleanupLibraryList.validated': `Bibliotekslisten blev valideret uden fejl.`,
  // objectBrowser:
  'objectBrowser.deleteFilter.infoMessage': `Slet filter '{0}'?`,
  'objectBrowser.createMember.prompt': `Navn på nyt member (member.ext)`,
  'objectBrowser.createMember.progressTitle': `Opretter member {0}...`,
  'objectBrowser.createMember.errorMessage': `Fejl ved oprettelse af member {0}: {1}`,
  'objectBrowser.copyMember.prompt': `Ny sti til kopiering af source member`,
  'objectBrowser.copyMember.errorMessage': `Kan ikke kopiere et member til sig selv!`,
  'objectBrowser.copyMember.progressTitle': `Opretter member {0}...`,
  'objectBrowser.copyMember.overwrite': `Vil du overskrive member {0}?`,
  'objectBrowser.copyMember.errorMessage2': `Member {0} eksisterer allerede!`,
  'objectBrowser.copyMember.errorMessage3': `Fejl ved oprettelse af member {0}: {1}`,
  'objectBrowser.deleteMember.warningMessage': `Er du sikker på at du vil slette member {0}?`,
  'objectBrowser.deleteMember.infoMessage': `Slettede member {0}.`,
  'objectBrowser.deleteMember.errorMessage': `Fejl ved sletning af member! {0}`,
  'objectBrowser.updateMemberText.prompt': `Opdater beskrivelse af member {0}`,
  'objectBrowser.updateMemberText.errorMessage': `Fejl ved ændring af member beskrivelse! {0}`,
  'objectBrowser.renameMember.prompt': `Omdøb member {0}`,
  'objectBrowser.renameMember.errorMessage': `Fejl ved omdøbning af member! {0}`,
  'objectBrowser.renameMember.invalid.input': `Nyt member navn skal være forskelligt fra det nuværende navn`,
  'objectBrowser.uploadAndReplaceMemberAsFile.infoMessage': `Fil blev sendt til member.`,
  'objectBrowser.uploadAndReplaceMemberAsFile.errorMessage': `Fejl ved afsendelse af fil! {0}`,
  'objectBrowser.downloadMemberContent.infoMessage': `Member blev hentet.`,
  'objectBrowser.downloadMemberContent.errorMessage': `Fejl ved hentning af member! {0}`,
  'objectBrowser.searchSourceFile.prompt': `Indtast LIB/SPF/member.ext til søgning (member.ext er valgfrit og kan indeholde mønstertegn)`,
  'objectBrowser.searchSourceFile.title': `Søg source fil`,
  'objectBrowser.searchSourceFile.invalidForm': `Venligst indtast værdi på formatet LIB/SPF/member.ext`,
  'objectBrowser.searchSourceFile.aspText': `(i ASP {0})`,
  'objectBrowser.searchSourceFile.previousSearches': `Forrige søgninger`,
  'objectBrowser.searchSourceFile.placeholder': `Indtast søgetekst eller vælg en af de tidligere søgninger.`,
  'objectBrowser.searchSourceFile.placeholder2': `Indtast søgetekst.`,
  'objectBrowser.searchSourceFile.title2': `Søg i {0} {1}`,
  'objectBrowser.searchSourceFile.errorMessage': `Kan ikke søge med *ALL.`,
  'objectBrowser.createFilter': `Opret nyt filter`,
  'objectBrowser.createLibrary.prompt': `Navn på nyt bibliotek`,
  'objectBrowser.createLibrary.errorMessage': `Kan ikke oprette bibliotek "{0}": {1}`,
  'objectBrowser.createLibrary.infoMessage': `Vil du tilføje det nyt bibliotek til bibliotekslisten?`,
  'objectBrowser.createLibrary.errorMessage2': `Biblioteksnavn er for langt.`,
  'objectBrowser.createSourceFile.prompt': `Navn på ny source fil`,
  'objectBrowser.createSourceFile.infoMessage': `Opretter source fil {0}.`,
  'objectBrowser.createSourceFile.errorMessage': `Fejl ved oprettelse af source fil! {0}`,
  'objectBrowser.createSourceFile.errorMessage2': `Source filnavn må være 10 tegn eller mindre.`,
  'objectBrowser.changeObjectDesc.prompt': `Opdater objekt beskrivelse for {0}, *BLANK for ingen beskrivelse`,
  'objectBrowser.changeObjectDesc.errorMessage': `Objekt beskrivelse må være 50 tegn eller mindre.`,
  'objectBrowser.changeObjectDesc.infoMessage': `Ændrede objekt beskrivelsen for {0} {1}.`,
  'objectBrowser.changeObjectDesc.errorMessage2': `Fejl ved ændring af objekt beskrivelse for {0}! {1}`,
  'objectBrowser.copyObject.prompt': `Kopier objekt til new bibliotek/objekt`,
  'objectBrowser.copyObject.errorMessage': `Forkert sti: {0}. Brug formatet LIB/OBJ`,
  'objectBrowser.copyObject.errorMessage2': `Biblioteksnavn må være 10 tegn eller mindre.`,
  'objectBrowser.copyObject.errorMessage3': `Objektnavn må være 10 tegn eller mindre.`,
  'objectBrowser.copyObject.infoMessage': `Kopierede objekt {0} {1} til {2}.`,
  'objectBrowser.copyObject.infoMessage2': `Kopierede objekt {0} {1} til {2}. Opfrisk object browser.`,
  'objectBrowser.copyObject.errorMessage4': `Fejl ved kopiering af objekt {0}! {1}`,
  'objectBrowser.deleteObject.warningMessage': `Er du sikker på at du vil slette {0} {1}?`,
  'objectBrowser.deleteObject.infoMessage': `Slettede {0} {1}.`,
  'objectBrowser.deleteObject.errorMessage': `Fejl ved sletning af objekt! {0}`,
  'objectBrowser.deleteObject.progress':'Sletter objekt {0} {1}...',
  'objectBrowser.renameObject.prompt': `Omdøb objekt`,
  'objectBrowser.renameObject.errorMessage': `Objektnavn må være 10 tegn eller mindre.`,
  'objectBrowser.renameObject.infoMessage': `Omdøbte objekt {0} {1} til {2}.`,
  'objectBrowser.renameObject.errorMessage2': `Fejl ved omdøbning af objekt {0}! {1}`,
  'objectBrowser.renameObject.progress': `Omdøber objekt {0} {1} til {2}...`,
  'objectBrowser.moveObject.prompt': `Flyt objekt`,
  'objectBrowser.moveObject.errorMessage': `Objekt navn må være 10 tegn eller mindre.`,
  'objectBrowser.moveObject.infoMessage': `Flyttede objekt {0} {1} til {2}.`,
  'objectBrowser.moveObject.infoMessage2': `Flyttede objekt {0} {1} til {2}. Opfrisk object browser.`,
  'objectBrowser.moveObject.errorMessage2': `Fejl ved flytning af objekt {0}! {1}`,
  'objectBrowser.moveObject.progress': `Flytter objekt {0} {1} til {2}...`,
  'objectBrowser.doSearchInSourceFile.title': `Søgning`,
  'objectBrowser.doSearchInSourceFile.progressMessage': `Henter member liste for {0}.`,
  'objectBrowser.doSearchInSourceFile.searchMessage1': `'{0}' i {1}.`,
  'objectBrowser.doSearchInSourceFile.searchMessage2': `Dette kan tage noget tid da der er {0} members. Søger stadig efter '{1}' i {2}.`,
  'objectBrowser.doSearchInSourceFile.searchMessage3': `Hvad er egentligt så specielt med '{0}'?`,
  'objectBrowser.doSearchInSourceFile.searchMessage4': `Søger stadig efter '{0}' i {1}...`,
  'objectBrowser.doSearchInSourceFile.searchMessage5': `Hvad med at hente en kop kaffe mens du venter?`,
  'objectBrowser.doSearchInSourceFile.searchMessage6': `Uha, dette tager virkelig lang tid. Lad os håbe du får det ønskede resultat.`,
  'objectBrowser.doSearchInSourceFile.searchMessage7': `Der er 10 slags mennesker - dem der forstår binært og dem, der ikke gør!`,
  'objectBrowser.doSearchInSourceFile.searchMessage8': `Hvordan i alverden ender man med {0} members?`,
  'objectBrowser.doSearchInSourceFile.searchMessage9': `'{0}' i {1}.`,
  'objectBrowser.doSearchInSourceFile.notFound': `Søgning efter '{0}' i {1} gav intet resultat.`,
  'objectBrowser.doSearchInSourceFile.noMembers': `Der er ingen members at søge i.`,
  'objectBrowser.doSearchInSourceFile.errorMessage': `Fejl ved søgning i members: {0}`,
  // ProfilesView:
  'ProfilesView.saveConnectionProfile.prompt': `Navn på profil`,
  'ProfilesView.saveConnectionProfile.infoMessage': `Gemte aktuelle indstillinger til profil '{0}'.`,
  'ProfilesView.deleteConnectionProfile.warningMessage': `Er du sikker på at du vil slette profilen '{0}'?`,
  'ProfilesView.loadConnectionProfile.infoMessage': `Skiftede til profilen '{0}'.`,
  'ProfilesView.loadCommandProfile.infoMessage': `Skiftede til profilen '{0}'.`,
  'ProfilesView.loadCommandProfile.warningMessage': `Fejl ved at hente bibliotekslisten fra kommando. Feature er ikke installeret.`,
  'ProfilesView.loadCommandProfile.errorMessage': `Fejl ved at hente bibliotekslisten fra kommando: {0}`,
  'ProfilesView.setToDefault.infoMessage': `Nulstil til standard`,
  'ProfilesView.setToDefault.detail': `Dette vil nulstille bibliotekslisten, aktuelle mappe og Bruger Variable.`,
  //Actions
  'actions.CURLIB': 'Aktuelle bibliotek (sættes i Library List)',
  'actions.USERNAME': `Brugernavn for forbindelsen`,
  'actions.HOME': `Aktuelle mappe (sættes i IFS Browser)`,
  'actions.HOST': `Host navn eller IP adresse fra den aktuelle forbindelse`,
  'actions.BUILDLIB': `Det samme som <code>&amp;CURLIB</code>`,
  'actions.LIBLC': `Liste af biblioteker adskilt af komma`,
  'actions.LIBLS': `Liste af biblioteker adskilt af mellemrum`,
  'actions.OPENLIB': `Biblioteksnavn med source member (<code>&amp;OPENLIBL</code> for små bogstaver)`,
  'actions.OPENSPF': `Source fil navn med source member (<code>&amp;OPENSPFL</code> for små bogstaver)`,
  'actions.OPENMBR': `Navn på source member (<code>&amp;OPENMBRL</code> for små bogstaver)`,
  'actions.member.EXT': `Type af source member (<code>&amp;EXTL</code> for små bogstaver)`,
  'actions.FULLPATH': `Fulde sti på filen på fjernsystemet`,
  'actions.RELATIVEPATH': `Relative sti for filen fra aktuelle mappe eller workspace`,
  'actions.PARENT': `Navn på forrige mappe eller source fil`,
  'actions.BASENAME': `Navn på filen, inklusive filtypen`,
  'actions.streamfile.NAME': `Navn på filen (<code>&amp;NAMEL</code> for små bogstaver)`,
  'actions.streamfile.EXT': `Filtypen (<code>&amp;EXTL</code> for små bogstaver)`,
  'actions.LIBRARY': `Biblioteksnavn med objektet (<code>&amp;LIBRARYL</code> for små bogstaver)`,
  'actions.NAME': `Navn på objektet (<code>&amp;NAMEL</code> for små bogstaver)`,
  'actions.object.TYPE': `Typen af objektet (<code>&amp;TYPEL</code> for små bogstaver)`,
  'actions.object.EXT': `Objektets attribut (<code>&amp;EXTL</code> for små bogstaver)`,
  'actions.mainMenu.workWithActions': `Arbejd med Aktioner`,
  'actions.mainMenu.createOrMaintain': `Opret eller revider Aktioner. Aktioner er grupperede efter typen på de vedrørte filer/objekter.`,
  'actions.mainMenu.newAction': `Opret`,
  'actions.duplicate.select': `Vælg en aktion til kopiering`,
  'actions.workAction.create.title': `Opret aktion`,
  'actions.workAction.edit.title': `Revider aktion "{0}"`,
  'actions.workAction.duplicate.title': `Kopier aktion "{0}"`,
  'actions.workAction.name': `Action navn`,
  'actions.workAction.command': `Kommandoer`,
  'actions.workAction.command.description': `Nedenfor er de tilgængelige variable, baseret på objekt typen. Du kan angive forskellige kommandoer på hver linie. Hver kommando er "stateless" og afvikles i eget job.`,
  'actions.workAction.extensions': `Typer`,
  'actions.workAction.extensions.description': `En komma-separeret liste af typer for denne aktion. Dette kan være en member type, en streamfile filtype, en objekt type eller en objekt attribut.`,
  'actions.workAction.types': `Type`,
  'actions.workAction.types.description': `Typer understøttet af denne aktion.`,
  'actions.workAction.types.member': `Member`,
  'actions.workAction.types.member.description': `Source members i QSYS filsystemet`,
  'actions.workAction.types.streamfile': `Streamfile`,
  'actions.workAction.types.streamfile.description': `Filer i det integrerede filsystem (IFS)`,
  'actions.workAction.types.object': `Objekt`,
  'actions.workAction.types.object.description': `Objekter i QSYS filsystemet`,
  'actions.workAction.types.file': `Lokal fil (workspace)`,
  'actions.workAction.types.file.description': `Aktioner for lokale filer i VS Code Workspace.`,
  'actions.workAction.environment': `Miljø`,
  'actions.workAction.environment.description': `Miljø som kommandoerne skal afvikles i.`,
  'actions.workAction.environment.ile': `ILE`,
  'actions.workAction.environment.ile.description': `Afvikles som ILE kommando`,
  'actions.workAction.environment.qsh': `QSHELL`,
  'actions.workAction.environment.qsh.description': `Afvikles som kommando i QSHELL`,
  'actions.workAction.environment.pase': `PASE`,
  'actions.workAction.environment.pase.description': `Afvikles som kommando i PASE`,
  'actions.workAction.delete.confirm': `Er du sikker på du vil slette "{0}"?`,
  'actions.workAction.refresh':'Opfrisk',
  'actions.workAction.refresh.description':'Liste niveauet for opfriskning efter aktion er udført.',
  'actions.workAction.refresh.no':'Ingen',
  'actions.workAction.refresh.no.description':'Ingen opfriskning',
  'actions.workAction.refresh.parent':'Comtainer',
  'actions.workAction.refresh.parent.description':'Den aktuelle container bliver opfrisket',
  'actions.workAction.refresh.filter':'Filter',
  'actions.workAction.refresh.filter.description':'Det aktuelle filter bliver opfrisket',
  'actions.workAction.refresh.browser':'Vindue',
  'actions.workAction.refresh.browser.description':'Hele vinduet bliver opfrisket'
};
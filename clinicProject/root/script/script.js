// JavaScript Document

function fnTopMenu1_Type1() {
	this.menu = new Array();
	this.menuseq = 0;
	
	this.Start = function() {
		this.MenuBox = document.getElementById(this.DivName).getElementsByTagName("ul")[0].childNodes;
		
		// �޴��� ������ �ľ��ϴ� �κ�
		this.MenuLength = this.MenuBox.length;
		
		// �޴��� 1���� ��ũ�κп� ���콺�� Ű������ ������ �ִ� �κ�
		for ( var i=0; i<this.MenuLength; i++ ) {
			if ( this.MenuBox.item(i).tagName != "LI" ) { continue; }
			this.MenuLink = this.MenuBox.item(i).getElementsByTagName("a")[0];
			this.MenuLink.i = i;
			this.MenuLink.fnName = this.fnName;
			this.MenuLink.onmouseover = this.MenuLink.onfocus = function()	{ eval(this.fnName +".fnMouseOver(" + this.i + ")") }

			this.MenuSubBox = this.MenuBox.item(i).getElementsByTagName("div")[0];
			this.MenuSubMenu = this.MenuSubBox.getElementsByTagName("ul")[0].getElementsByTagName("li");
			this.MenuSubMenuLength = this.MenuSubMenu.length;
			
			// �޴��� 2���� ��ũ�κп� ���콺�� Ű������ ������ �ִ� �κ�
			for ( var j=0; j<this.MenuSubMenuLength; j++ ) {
				this.MenuSubLink = this.MenuSubMenu.item(j).getElementsByTagName("a")[0];
				this.MenuSubLink.i = i;
				this.MenuSubLink.j = j;
				this.MenuSubLink.fnName = this.fnName;
				this.MenuSubLink.onmouseover = this.MenuSubLink.onfocus = function()		{ eval(this.fnName +".fnMouseSubOver(" + this.i + "," + this.j + ")") }
				this.MenuSubLink.onmouseout = this.MenuSubLink.onblur = function()		{ eval(this.fnName +".fnMouseSubOut(" + this.i + "," + this.j + ")") }
			}
			
			this.MenuSubBox.style.display = "none";
			
			this.menuseq++;
			this.menu[this.menuseq] = i
		}
		
		if ( this.DefaultMenu != 0 ) {
			this.fnMouseOver(this.menu[this.DefaultMenu]);
			if ( this.DefaultSubMenu != 0 ) {
				this.fnMouseSubOver(this.menu[this.DefaultMenu],this.DefaultSubMenu - 1);
			}
		}
	}
	
	// �޴��� 1���� ��ũ�κп� ���콺�� Ű������ ������ ���� �����ϴ� �κ�
	this.fnMouseOver = function(val) {
		for ( var i=0; i<this.MenuLength; i++ ) {
			if ( this.MenuBox.item(i).tagName != "LI" ) { continue; }
			this.MenuImg = this.MenuBox.item(i).getElementsByTagName("a")[0].getElementsByTagName("img")[0];
			this.MenuSDiv = this.MenuBox.item(i).getElementsByTagName("div")[0];
			if ( i == val ) {
				this.MenuImg.src = this.MenuImg.src.replace("_off.png","_on.png");
				this.MenuSDiv.style.display = "block";
			} else {
				this.MenuImg.src = this.MenuImg.src.replace("_on.png","_off.png");
				this.MenuSDiv.style.display = "none";
			}
		}
	}
	
	// �޴��� 2���� ��ũ�κп� ���콺�� Ű������ ������ ���� �����ϴ� �κ�
	this.fnMouseSubOver = function(mnum,snum) {
		this.SubMenuImg = this.MenuBox.item(mnum).getElementsByTagName("div")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[snum].getElementsByTagName("a")[0].getElementsByTagName("img")[0];
		this.SubMenuImg.src = this.SubMenuImg.src.replace("_off.gif","_on.gif");
	}
	this.fnMouseSubOut = function(mnum,snum) {
		this.SubMenuImg = this.MenuBox.item(mnum).getElementsByTagName("div")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[snum].getElementsByTagName("a")[0].getElementsByTagName("img")[0];
		this.SubMenuImg.src = this.SubMenuImg.src.replace("_on.gif","_off.gif");
	}
	
}
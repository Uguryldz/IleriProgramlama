module.exports = 
{

	ChatbotReply:function(message)
	{
		// Bot verileri
		this.Bot_Age = 26;
		this.Bot_Name = "Uğur YILDIZ";
		this.Bot_University = "Akdeniz Üniversitesi";
		this.Bot_Country = "Antalya";
		this.Bot_Business = "Protel";
		this.Bot_Manager = "Uğur YILDIZ";
		this.Bot_UniverstyTeacher = "Erokan Canbazoğlu";
		this.Bot_lesson = "İleri Programlama";
		this.Bot_Job = "RPA Geliştirici";

		// Kullanıcı data
		this.User_Age;
		this.User_Name;
		this.User_University;
		// Mesaj İşleme... 
		message= message.toLowerCase()

		if(message.indexOf("selam") > -1 || message.indexOf("merhaba") > -1 || message.indexOf("hey") > -1 )
		{
			return "Selam!";
		} 
		
		else if(message.indexOf("yaş") > -1 || message.indexOf("seninyaş") > -1 || message.indexOf("kaç yaşındasın") > -1 )
		{
			return  this.Bot_Age + " yaşındayım";
		}
		else if(message.indexOf("adın") > -1 || message.indexOf("adın ne") > -1 || message.indexOf("sen kimsin") > -1 )
		{
			return "Ben " + this.Bot_Name;
		}
		else if(message.indexOf("üniversite") > -1 || message.indexOf("hangiüniv") > -1 || message.indexOf("Univ") > -1 )
		{
			return  this.Bot_University + " nde okuyorum";
		}
		else if (message.indexOf("nasılsın") > -1 || message.indexOf("naber") > -1  )
		{
			return "Ben İyiyim Teşekkür Ederim ^_^"
		}
		else if(message.indexOf("nerelisin") > -1 || message.indexOf("nerdesin") > -1  || message.indexOf("nerede") > -1 )
		{
			return "Ben " + this.Bot_Country;
		}
		else if(message.indexOf("kurum") > -1 || message.indexOf("firma") > -1  || message.indexOf("hangifirma") > -1 )
		{
			return "Ben " + this.Bot_Business+ " de çalışıyorum"; 
		}
		else if(message.indexOf("Yöneticin kim") > -1 || message.indexOf("yönetici") > -1  )
		{
			return "Benim yöneticim " + this.Bot_Manager;
		}
		else if(message.indexOf("öğretmen") > -1 || message.indexOf("Öğretmenin kim") > -1  )
		{
			return "Benim Üniversite Öğtermenim " + this.Bot_UniverstyTeacher;
		}
		else if(message.indexOf("ders") > -1 || message.indexOf("hangi ders bu") > -1  )
		{
			return this.Bot_lesson +  " Dersi Alıyorum " ; 
		}
		else if(message.indexOf("Ne İş yapıyorsun") > -1 || message.indexOf("işin ne") > -1  )
		{
			return "Benim Görevim " + this.Bot_Job;
		}
		else if(message.indexOf("kapat") > -1 || message.indexOf("bitir") > -1  )
		{
			return process.exit(0);
		}
		return "Üzgünüm, Ne Dediğinizi Anlamadım :( ";
	}


};
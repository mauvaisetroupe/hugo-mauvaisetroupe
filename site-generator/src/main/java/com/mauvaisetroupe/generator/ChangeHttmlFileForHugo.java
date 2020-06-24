package com.mauvaisetroupe.generator;

import java.io.BufferedWriter;
import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.DateFormat;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.text.WordUtils;

import com.mauvaisetroupe.tdm.input.Main;
import com.mauvaisetroupe.tdm.input.Root.Country.Page.Picture;

public class ChangeHttmlFileForHugo {

	public static void main(String[] args) throws Throwable {
		
		String input = "D:\\hugo\\content-input\\Tour du monde";
		String output = "D:\\hugo\\content";
		createMdFiles(input, output);
	}

	/*
	public static void doRename(String ff) throws IOException {
		Files.walk(Paths.get(ff)).filter(Files::isRegularFile).filter(f -> f.toString().endsWith("html")).forEach((f) -> {
			String file = f.toString();
			System.out.println(file + " found!");

			f.toFile().renameTo(new File(f.toString().replace("html", "html.toconvert")));

		});

	}
	*/

	public static void createMdFiles(String input, String output) throws Throwable {

		// final Map<String, Map<Integer, List<Picture>>> pictureMap =
		// Main.getMap();
		final Map<String, Picture> picturemap = Main.getMap();

		Files.walk(Paths.get(input)).filter(Files::isRegularFile).filter(f -> f.toString().endsWith("html.toconvert")).forEach((f) -> {
			String file = f.toString();
			// System.out.println(file + " found!");
			try {

				File datelist = null;
				String country = null;
				String countryfolder = null;
				int pageNumber = 0;
				int countryNumber = 0;
				int weight = 1;
				DateFormat format = new SimpleDateFormat("dd/mm/yy");
				DateFormat format2 = new SimpleDateFormat("yyyy-mm-dd");
				DateFormat format3 = new SimpleDateFormat("yyyymmdd");
				DateFormat format4 = new SimpleDateFormat("yyyy-mm");
				
				String dateAsString = null;
				String dateAsWeight = null;
				String thumb = null;
				String countryDate = null;
				
				boolean addList = false;

				String title = WordUtils.capitalize(f.getFileName().toString().replace(".html.toconvert", "").replaceAll("\\.", " "));
				Path outputPath = null;
				Path outputPath2 = null;
				

				String htmlConvertFileName = f.getFileName().toString();
				if (htmlConvertFileName.equals("carnet.de.voyage.html.toconvert")) {
					datelist = new File(new File(f.getParent().toFile(), "0001"), "date.list");
					
					country = WordUtils.capitalize(f.getParent().getFileName().toString().replaceAll("[0-9_]", ""));
					countryfolder = f.getParent().getFileName().toString().replaceAll("^[0-9]*_", "");
					countryDate = countryfolder.substring(countryfolder.length()-8, countryfolder.length());
					countryDate = format4.format(format3.parse(countryDate));
					
					
					title = "Carnet de Voyage : " + country;
					Date d = format.parse(Files.readAllLines(Paths.get(datelist.toString())).get(0));
					dateAsString = format2.format(d) + "T05:00:00";
					dateAsWeight = format3.format(d) + "05";
					pageNumber = 0;
					countryNumber = Integer.parseInt(f.getParent().getFileName().toString().replaceAll("_.*", ""));
					thumb = "tdm/" + country.toLowerCase() + ".gif";
					addList = true;
					//outputPath = Paths.get(new File(output + "\\pays\\" + country.toLowerCase() + "\\_index.md").toString());
					outputPath = Paths.get(f.toString()
							.replace("html.toconvert", "md")
							.replaceAll("content-input", "content")
							.replaceAll("Tour du monde", ""));
					
					File tmp = outputPath.toFile();
					tmp = new File(tmp.getParentFile(), "000-" +  tmp.getName());
					outputPath=tmp.toPath();

					// generate _index file for thumbnail
					
					outputPath2 = outputPath;
					File tmp2 = new File(outputPath.toFile().toString().replace("000-carnet.de.voyage.md", "_index.md"));
					outputPath2=tmp2.toPath();
					
					if (outputPath2!=null) {
						StringBuffer tmp3 = new StringBuffer();
						tmp3.append("+++\n");
						tmp3.append("title=\""+ country + " - Tour du monde 2001\"\n");
						//tmp3.append("thumbnail=\"tdm/" +  country.toLowerCase() + ".gif\"\n");
						tmp3.append("thumbnail=\"tdm/nous-2.jpg\"\n");
						tmp3.append("inverseorder=true\n");
						tmp3.append("+++\n");
						BufferedWriter writer = Files.newBufferedWriter(outputPath2, StandardCharsets.UTF_8);
						writer.write(tmp3.toString());
						writer.close();
					}
					
					System.out.println(">>>"+outputPath);
					

				} else {
					
					if (htmlConvertFileName.equals("_index.html.toconvert")) {
						datelist = new File(f.getParent().toFile(), "date.list");
						//country = WordUtils.capitalize(f.getParent().getParent().getFileName().toString().replaceAll("[0-9_]", ""));
						//countryfolder = f.getParent().getParent().getFileName().toString().replaceAll("^[0-9]*_", "");
						//pageNumber = Integer.parseInt(f.getParent().getFileName().toString().replaceAll("^0*", "").replaceAll("\\\\/", ""));
						//countryNumber = Integer.parseInt(f.getParent().getParent().getFileName().toString().replaceAll("_.*", ""));
						Date d = format.parse(Files.readAllLines(Paths.get(datelist.toString())).get(0));
						dateAsString = format2.format(d) + "T12:00:00";
						dateAsWeight = format3.format(d) + "12";
						//thumb = "header/" + countryfolder + "/" + pageNumber + ".jpg";
						outputPath = Paths.get(f.toString()
								.replace("html.toconvert", "md")
								.replaceAll("content-input", "content")
								.replaceAll("Tour du monde", ""));
						

						System.out.println(">>>"+outputPath);

					}
					else {
						datelist = new File(f.getParent().toFile(), "date.list");
						country = WordUtils.capitalize(f.getParent().getParent().getFileName().toString().replaceAll("[0-9_]", ""));
						countryfolder = f.getParent().getParent().getFileName().toString().replaceAll("^[0-9]*_", "");
						countryDate = countryfolder.substring(countryfolder.length()-8, countryfolder.length());
						countryDate = format4.format(format3.parse(countryDate));

						pageNumber = Integer.parseInt(f.getParent().getFileName().toString().replaceAll("^0*", "").replaceAll("\\\\/", ""));
						countryNumber = Integer.parseInt(f.getParent().getParent().getFileName().toString().replaceAll("_.*", ""));
						Date d = format.parse(Files.readAllLines(Paths.get(datelist.toString())).get(0));
						dateAsString = format2.format(d) + "T12:00:00";
						dateAsWeight = format3.format(d) + "12";
						thumb = "header/" + countryfolder + "/" + pageNumber + ".jpg";
						outputPath = Paths.get(f.toString()
								.replace("html.toconvert", "md")
								.replaceAll("content-input", "content")
								//.replaceAll("Tour du monde", country));
								.replaceAll("Tour du monde", ""));
						
						File tmp = outputPath.toFile();
				        NumberFormat nf = new DecimalFormat("000");

						tmp = new File(tmp.getParentFile().getParentFile(), nf.format(pageNumber) + "-" +  tmp.getName());
						outputPath=tmp.toPath();
						
					}
				}
				weight = 100 * (countryNumber + 1) + pageNumber;
				

				StringBuffer header = new StringBuffer();
				header.append("+++\n");
				header.append("title=\"" + title + "\"\n");
				if (country!=null) {
					header.append("voyages = [\"Tour du monde 2001\",\"" + country.toLowerCase()+"-"+countryDate + "\"]\n");
				}
				else {
					header.append("voyages = [\"Tour du monde 2001\"]\n");
				}
				header.append("date = \"" + dateAsString + "\"\n");
				if (country!= null) header.append("pays = [\""  + country + "\"]\n");
				if (thumb!= null) header.append("thumbnail=\"" + thumb + "\"\n");
				if (weight > 0) {
					header.append("pays_weight = " + weight + "\n");
					header.append("voyages_weight = " + weight + "\n");
					//header.append("weight = " + dateAsWeight + "\n");
					//header.append("weight = " + weight + "\n");
				}
				header.append("+++\n");

				StringBuffer tmp = new StringBuffer();
				tmp.append(header);

				List<String> liststring = Files.readAllLines(f, StandardCharsets.ISO_8859_1);
				for (String s : liststring) {
					tmp.append(htmlToMarkdown(s));
					tmp.append("\n");
				}

				tmp.append("\n");

				try {
					if (pageNumber > 0) {
						// filter with jdai
						Path jdaipath = Paths.get("" + new File(f.getParent().toFile(), "jdaidir.lst"));
						List<String> jdaiPictures = Files.readAllLines(jdaipath);
						tmp.append("<div id=\"TOTO\">");
						jdaiPictures = new ArrayList<String>(new LinkedHashSet<String>(jdaiPictures));
						for (String picId : jdaiPictures) {
							String id = picId.trim().toLowerCase();
							Picture pic = picturemap.get(id);
							if (pic == null) {
								System.out.println("Nothing for : [" + id + "] jdai = " + jdaipath);
							}
							else {
								//System.out.println("Found for : [" + id + "]");
							}
							File staticFolder = new File ("D:/hugo/static/images");
							if (pic != null && pic.getPath()!=null) {
								File picFile = new File(staticFolder,pic.getPath());
								if (picFile.exists() && picFile.isFile()) {
									
									tmp.append("{{< figurepage src=\"");
									tmp.append(pic.getPath());
									tmp.append("\" ");
									if (pic!=null && pic.getDescription()!=null) tmp.append("title=\"" + pic.getDescription() + "\" ");
									tmp.append(" >}}");
									tmp.append("\n");
								}
								else {
									System.out.println("PB with Picture : " + pic.getPath());
								}
							}
							else {
								System.out.println("PB with Picture : " + picId);
							}
							

						}
						tmp.append("</DIV>\n\n");

					}
				} catch (Exception e) {
					System.out.println(country);
					System.out.println(pageNumber);
					e.printStackTrace();
				}


				if (addList) {
					tmp.append("{{< pagespays >}}\n");
					tmp.append("## Le trajet\n");
					tmp.append("{{< img src=\"/tdm/" + country.toLowerCase() + ".gif\" alt=\"Le récit\" >}}");
				}
				


				
				try {
					if (outputPath!=null) {
						
						outputPath.getParent().toFile().mkdirs();
						if (outputPath.toFile().exists()) {
							Files.delete(outputPath);
						}
					}
				} catch (Throwable e) {
					e.printStackTrace();
				}
				// System.out.println("about to write " + path);
				if (outputPath!=null) {
					BufferedWriter writer = Files.newBufferedWriter(outputPath, StandardCharsets.UTF_8);
					writer.write(tmp.toString());
					writer.close();
				}

			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		});

	}

	private static String htmlToMarkdown(String string) {
		return string.replaceAll("^ *", "").replaceAll("<p>", "").replace("</p>", "\n").replaceAll("<a name=\".*?\"></a>", "").replaceAll("<p class=\"TitrePage\">", "### ");
	}

}

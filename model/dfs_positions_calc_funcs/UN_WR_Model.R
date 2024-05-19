model_data = read.csv("WR_model_data")

WR_Model_Data <- read_csv("C:/Users/jkwoo/Downloads/WR_Model_Data.csv")                      
attach(WR_Model_Data)                      
WR_Model <- lm(Slot Snaps~TPRR)
WR_Model <- lm(MTF/REc_%~TPRR)
WR_model <- lm(TPRR~RR)
summary(WR_model)
summary(WR_model)$r.squared

WR_model <- lm(TPRR~`Rec TD MS`)
summary(WR_model)$r.squared

WR_model <- lm(TPRR~`Slot %`)
summary(WR_model)$r.squared

WR_model <- lm(`REC Grade`~`PPR Points`)
summary(WR_model)$r.squared

WR_model <- lm(`REC Grade`~YPRR)
summary(WR_model)$r.squared

WR_model <- lm(`REC Grade`~`Adjusted Yds Per Team Play`)
summary(WR_model)$r.squared

WR_model <- lm(`EPA Per Play`~`EPA Per Team Pass Attempt`)
summary(WR_model)$r.squared

str(WR_Model_Data)

WR_Model_Data$`MTF/REC %`

str(WR_Model_Data)

ifelse(WR_Model_Data$`REC Grade` > 75, print(WR_Model_Data$Hit), print('NA'))

names(WR_Model_Data)


view(WR_Model_Data)

num1D <- as.numeric(WR_Model_Data$`1D/RR`)
cv <- sd(num1D, na.rm=T) / mean(num1D, na.rm=T) * 100           
cv
install.packages("mongolite")
library(mongolite)
connection_string = 'mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/fantasycalcData'
trips_collection = mongo(collection="wrProspectModelData", db="dailydynasties", url=connection_string)
trips_collection$count()
trips_collection
view(trips_collection)
trips_collection$iterate()$one()
test <- trips_collection$iterate()$one()

test2 <- test$dataStructureForR

head(test2)


names <- c()
fd1RR <- c()
rec_grade <- c()
ppr_points <- c()
adjYrdsPerTeamPlay <- c()
EPAPerTeamPassAttempt <- c()
EPAPerPlay <- c()
recTDs <- c()
recYrdsPerGame <- c()
draftPickNum <- c()
NFLPPRPointsYearsOneToThree <- c()
UNScore <- c()




for (dataStructureForR in test2) {
    print(dataStructureForR$fd1rr)
  names <- c(names, dataStructureForR$name)
  fd1RR <- c(fd1RR, round(dataStructureForR$fd1rr, 2))
  rec_grade <- c(rec_grade, round(dataStructureForR$recGrade, 2))
  ppr_points <- c(ppr_points, round(dataStructureForR$pprPoints, 2))
  adjYrdsPerTeamPlay <- c(adjYrdsPerTeamPlay, round(dataStructureForR$adjYrdsPerTeamPlay, 2))
  EPAPerTeamPassAttempt <- c(EPAPerTeamPassAttempt, dataStructureForR$EPAPerTeamPassAttemp)
  EPAPerPlay <- c(EPAPerPlay, dataStructureForR$EPAPerPlay)
  recTDs <- c(recTDs, round(dataStructureForR$recTDs, 2))
  recYrdsPerGame <- c(recYrdsPerGame, round(dataStructureForR$recYrdsPerGame, 2))
  draftPickNum <- c(draftPickNum, as.numeric(dataStructureForR$draftPickNum, na.rm = T))
  NFLPPRPointsYearsOneToThree <- c(NFLPPRPointsYearsOneToThree, as.numeric(dataStructureForR$NFLPPRPointsYearsOneToThree, na.rm = T))
  UNScore <- c(UNScore, as.numeric(dataStructureForR$UNScore))
}


wrMat <- matrix(0, nrow = 168, ncol = 11)



wrMat[, 1] <- fd1RR
wrMat[, 2] <- rec_grade
wrMat[, 3] <- ppr_points
wrMat[, 4] <- adjYrdsPerTeamPlay
wrMat[, 5] <- EPAPerTeamPassAttempt
wrMat[, 6] <- EPAPerPlay
wrMat[, 7] <- recTDs
wrMat[, 8] <- recYrdsPerGame
wrMat[, 9] <- draftPickNum
wrMat[, 10] <- NFLPPRPointsYearsOneToThree
wrMat[, 11] <- UNScore
wrMat

rownames(wrMat) <- names

colnames(wrMat) <- c('fd1RR', 'rec_grade', 'PPR_Points', 'adjYrdsPerTeamPlay', 'EPAPerTeamPassAttempt', 'EPAPerPlay', 'recTDs', 
                     'recYrdsPerGame', 'draft_pick', 'year_1-3_NFL', 'UNScore')
wrMat




cor(fd1RR, adjYrdsPerTeamPlay)
cor(UNScore, NFLPPRPointsYearsOneToThree)

smallfd1RR <- head(fd1RR, 10)
smalladjYrdsPerTeamPlay <- head(adjYrdsPerTeamPlay, 10)

plot(fd1RR, adjYrdsPerTeamPlay, col = c("cornflowerblue", "salmon"))

pValueTest = c()
for(ab in UNScore) { 
#  print(ab)
  temp <- t.test(UNScore, mu=ab)
#  print(temp)
}

t.test(fd1RR, ppr_points)

# real problems
#ppr_points, adjYrdsPerTeamPlay - 0.9355931
#rec_grade with most things honestly
#ppr_points, recTDs - 0.8762946
#ppr_points, recYrdsPerGame - 0.8984945
#adjYrdsPerTeamPlay, recYrdsPerGame - 0.9350031

#fd1RR, EPAPerPlay - 0.2990789
#fd1RR, recTDs - 0.5694948
#rec_grade, EPAPerPlay - 0.3186512
#ppr_points, EPAPerPlay - 0.1662443
#adjYrdsPerTeamPlay, EPAPerPlay - 0.1903674
#EPAPerTeamPassAttempt, EPAPerPlay - 0.4801429
#EPAPerTeamPassAttempt, recTDs - 0.6249745

EPA <- EPAPerTeamPassAttempt

ggplot(
  data = wrMat, 
  aes(
    x = UNScore, 
    y = NFLPPRPointsYearsOneToThree
  )
) + 
  geom_point(
    aes(
      color = draft_pick,
     # size = EPA
    )
  ) + 
  geom_smooth(
    method = 'lm', se = TRUE
  ) + 
  labs(
    x = "UNScore",
    y = "PPR points years 1-3"
  )



wrProspectModelData$careerAverageRecGrade <- gsub('[', '', wrProspectModelData$careerAverageRecGrade, fixed=T)
wrProspectModelData$careerAverageRecGrade <- gsub(']', '', wrProspectModelData$careerAverageRecGrade, fixed=T)
wrProspectModelData$careerAverageRecGrade <- gsub('null', '', wrProspectModelData$careerAverageRecGrade, fixed=T)
wrProspectModelData$careerAverageRecGrade <- gsub('"', '', wrProspectModelData$careerAverageRecGrade)
gsub(r"{\s*\([^\)]+\)}","",as.character(wrProspectModelData$careerAverageRecGrade))
library(stringr)
str_replace(wrProspectModelData$careerAverageRecGrade, " \\s*\\([^\\)]+\\)", "")
caRecGrade <- wrProspectModelData$careerAverageRecGrade
caRecGrade <- na.omit(caRecGrade)
caRecGrade
test <- as.numeric(wrProspectModelData$careerAverageRecGrade, na.rm = T)

                                                          

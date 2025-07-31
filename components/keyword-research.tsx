
"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function KeywordResearch() {
  const [keyword, setKeyword] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    if (!keyword.trim()) return
    
    setLoading(true)
    try {
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const mockResults = [
        {
          keyword: keyword,
          searchVolume: Math.floor(Math.random() * 10000) + 1000,
          difficulty: Math.floor(Math.random() * 100),
          cpc: (Math.random() * 5).toFixed(2),
          competition: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)]
        },
        {
          keyword: `${keyword} tips`,
          searchVolume: Math.floor(Math.random() * 5000) + 500,
          difficulty: Math.floor(Math.random() * 100),
          cpc: (Math.random() * 3).toFixed(2),
          competition: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)]
        },
        {
          keyword: `best ${keyword}`,
          searchVolume: Math.floor(Math.random() * 8000) + 800,
          difficulty: Math.floor(Math.random() * 100),
          cpc: (Math.random() * 4).toFixed(2),
          competition: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)]
        }
      ]
      
      setResults(mockResults)
    } catch (error) {
      console.error('Error fetching keyword data:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Keyword Research</CardTitle>
          <CardDescription>
            Enter a keyword to analyze search volume, difficulty, and competition
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input
              placeholder="Enter keyword..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="flex-1"
            />
            <Button onClick={handleSearch} disabled={loading}>
              {loading ? 'Analyzing...' : 'Research'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {results.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Keyword Analysis Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {results.map((result, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{result.keyword}</h3>
                    <Badge variant={result.competition === 'Low' ? 'default' : result.competition === 'Medium' ? 'secondary' : 'destructive'}>
                      {result.competition}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Search Volume:</span>
                      <div className="font-medium">{result.searchVolume.toLocaleString()}/month</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Difficulty:</span>
                      <div className="font-medium">{result.difficulty}/100</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">CPC:</span>
                      <div className="font-medium">${result.cpc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
